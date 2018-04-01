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

(defn load-blog []
  (->> (.readdirSync fs "./src/zuko/blog")
        (map (fn [file-name]
              (read-markdown-file (.resolve path "./src/zuko/blog" file-name))))))

(def data
  {:blog (load-blog)
   :projects [{:title "redash" :description "Lightweight Functional Programming for JavaScript" :href "https://redash.zuko.me"}
              {:title "react-reformed" :description "A Simpler Approach to Forms in React" :href "https://react-reformed.zuko.me"}]})
