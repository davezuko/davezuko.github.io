(ns zuko.routes
  (:require [zuko.utils :as utils]
            [zuko.views.home :as home]
            [zuko.layouts.default :as layout]
            [clojure.pprint :as pp]
            [clojure.string :as str]))

(defn str->uri [s]
  (-> s
      (str/lower-case)
      (str/replace #"\s+" "-")
      (str/replace #"[+?]" "")
      (str/replace #"-+" "-")))

(def blog-routes
  (->> (:blog utils/data)
       (map (fn [{:keys [title content]}]
              {:uri (str "/blog/" (str->uri title))
               :render #(layouts/blog)}))))

(def routes
  (flatten
    [{:uri "/" :render home/home}
     blog-routes]))
