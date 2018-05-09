(ns zuko.layouts.blog
  (:require [zuko.layouts.main :as default]
            [zuko.utils :refer [html]]))

(defn render [title content]
  (default/render
    [[:h1 title] content]))
