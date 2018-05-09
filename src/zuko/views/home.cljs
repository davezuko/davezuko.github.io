(ns zuko.views.home
  (:require [zuko.utils :as utils]
            [clojure.string :as str]
            [zuko.layouts.main :as default-layout]))

(def description "
  Hey there, I'm a web application developer currently obsessed with functional programming. I work professionally on large scale ReactJS applications, and in my free time enjoy contributing to the open source community and playing around with Clojure and Elm. Outside of work, I spend much of my time reading, playing tennis, and traveling.
  In the past I have worked on enterprise AngularJS applications, and before that developed websites for clients including Hilton Worldwide, Kimberly Clark, and Smucker's Natural Foods.")

(defn sanitize-href [href]
  (->
    href
    (.toLowerCase)
    (str/replace #"[+?]" "")
    (str/replace #"\s+" "-")))

(defn render-blog-link [{title :title published :published}]
  (let [href (sanitize-href (str "/blog/" title))
        year (last (.split published "/"))]
    [:li
      [:a {:href href}
       [:small (str "(" year ")")]
       title]]))

(defn render-project-link [{:keys [title description]}]
  (let [href (sanitize-href (str "https://" title ".zuko.me"))]
    [:li
      [:a {:href href} (str title ": " description)]]))

(defn home []
  (default-layout/render
    [:div
      [:h1 "David Zukowski"]
      [:section (utils/paragraphs description)]
      [:section]
      [:h2 "Writing"]
      [:ul (mapv render-blog-link (:blog utils/data))]
      [:section]
      [:h2 "Projects"]
      [:ul (mapv render-project-link (:projects utils/data))]]))
