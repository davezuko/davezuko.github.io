(ns zuko.routes
  (:require [zuko.views.home :as home]
            [zuko.utils :as utils]))

; (def blog-routes
;   (map #(-> {:uri "/blog" :title %}) (:blog utils/data)))

(def routes
  (flatten
    [{:uri "/" :content home}
     blog-routes]))
