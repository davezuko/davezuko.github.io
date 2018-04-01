(ns zuko.utils
  (:require [fs]
            [path]
            [marked]
            [front-matter :as fm]
            [clojure.pprint :as pp]
            [clojure.string :as str]))

(defn parse-node [node]
  (cond
    (empty? node) "" ;; how can this be empty?
    (string? node) node
    :else (html node)))

(defn parse-children [children]
  (str/join "\n" (mapv parse-node children)))

(defn attrs->html [attrs]
  (->> (into [] attrs)
       (map #(str (name (first %)) "=\"" (last %) "\""))
       (str/join " ")))

(defn cljs->html [tag attrs children]
  (let [opening-tag (str/trim (str "<" (name tag) " " (attrs->html attrs)))]
    (if (empty? children)
      (str opening-tag "/>")
      (str opening-tag ">" (parse-children children) "</" (name tag) ">"))))

(defn html [[tag & remaining :as node]]
  ; (println "\n-----------")
  ; (println "try compile")
  ; (println (pp/pprint node))
  ; (println "-----------\n")
  (if (map? (first remaining))
    (cljs->html tag (first remaining) (vec (rest remaining)))
    (cljs->html tag {} (vec remaining))))

(defn paragraphs [content]
  (->> (str/split content "\n")
       (map str/trim)
       (filter not-empty)
       (map #(-> [:p %]))))

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
