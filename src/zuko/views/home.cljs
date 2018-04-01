(ns zuko.routes
  (:require [zuko.utils :as utils]
            [zuko.layouts.default :as layouts]))

(def description "
  Hey there, I'm a web application developer currently obsessed with functional programming. I work professionally on large scale ReactJS applications, and in my free time enjoy contributing to the open source community and playing around with Clojure and Elm. Outside of work, I spend much of my time reading, playing tennis, and traveling.
  In the past I have worked on enterprise AngularJS applications, and before that developed websites for clients including Hilton Worldwide, Kimberly Clark, and Smucker's Natural Foods.")

(defn home []
  (layouts/default
    [:div
      [:h1 "David Zukowski"]
      [:section (utils/paragraphs description)]
      [:section]
      [:h2 "Writing"]
      [:ul (mapv #(-> [:li (:title %)]) (:blog utils/data))]
      [:section]
      [:h2 "Projects"]
      [:ul (mapv #(-> [:li (:title %)]) (:projects utils/data))]]))

(println (layouts/default))
