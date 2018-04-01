(ns zuko.utils
  (:require [fs]
            [path]
            [marked]
            [front-matter :as fm]
            [clojure.pprint :as pp]
            [clojure.string :as str]))

;; HTML Compiler
;; ------------------------------------
(defn parse-children [children]
  (str/join "\n" (mapv html children)))

(defn attrs->html [attrs]
  (->> (into [] attrs)
       (map #(str (name (first %)) "=\"" (last %) "\""))
       (str/join " ")))

(defn clj->html [tag attrs children]
  (let [html-tag (name tag)
        opening-tag (str/trim (str "<" html-tag " " (attrs->html attrs)))]
    (if (empty? children)
      (str opening-tag "/>")
      (str opening-tag ">" (parse-children children) "</" html-tag ">"))))

(defn html [node]
  (condp #(%1 %2) node
    empty? ""
    string? node
    vector? (let [tag (first node)
                  remaining (rest node)]
              (if (vector? tag) ;; TODO(zuko): hacky, improve this
                (parse-children node)
                (if (map? (first remaining))
                  (clj->html tag (first remaining) (vec (rest remaining)))
                  (clj->html tag {} (vec remaining)))))))

;; Component Helpers
;; ------------------------------------
(defn paragraphs [content]
  (->> (str/split content "\n")
       (map str/trim)
       (filter not-empty)
       (mapv #(-> [:p %]))))

;; Data Loaders
;; ------------------------------------
(defn read-markdown-file [file-path]
  (let [data (fm (.readFileSync fs file-path "utf8"))]
    (merge
      {:content (marked (.-body data))}
      (js->clj (.-attributes data) :keywordize-keys true))))

(defn load-dir [dir-path]
  (->> (.readdirSync fs dir-path)
      (map #(read-markdown-file (.resolve path dir-path %)))))

(defn load-data []
  (->> (.readdirSync fs "data")
       (map #(-> {(keyword %) (load-dir (.resolve path "data" %))}))
       (reduce merge {})))

(def data (load-data))
