(ns zuko.utils
  (:require [fs]
            [path]
            [marked]
            [front-matter :as fm]
            [clojure.string :as str]))

(defn html [tag attrs children]
  ;; todo
  tag)

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
