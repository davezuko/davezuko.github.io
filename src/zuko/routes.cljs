(ns zuko.routes
  (:require [clojure.string :as str]
            [zuko.utils :refer [html]]
            [zuko.layouts :as layouts]))

(def description "
  Hey there, I'm a web application developer currently obsessed with functional programming. I work professionally on large scale ReactJS applications, and in my free time enjoy contributing to the open source community and playing around with Clojure and Elm. Outside of work, I spend much of my time reading, playing tennis, and traveling.

  In the past I have worked on enterprise AngularJS applications, and before that developed websites for clients including Hilton Worldwide, Kimberly Clark, and Smucker's Natural Foods.")

;; TODO(zuko): make dynamic
(def writing
  [{:year 2016 :title "Eradicate Runtime Errors in React with Flow" :href "/eradicate-runtime-errors-in-react-with-flow"}
   {:year 2015 :title "Where Flux Went Wrong" :href "/where-flux-went-wrong"}
   {:year 2015 :title "From Redux to GraphQL" :href "/from-redux-to-graphql"}
   {:year 2015 :title "New to JavaScript? Avoid Angular" :href "/new-to-javascript-avoid-angular"}])

;; TODO(zuko): make dynamic
(def projects
  [{:title "redash" :description "Lightweight Functional Programming for JavaScript" :href "https://redash.zuko.me"}
   {:title "react-reformed" :description "A Simpler Approach to Forms in React" :href "https://react-reformed.zuko.me"}])

(defn paragraphs [content]
  (->> (str/split content "\n")
       (map str/trim)
       (filter not-empty)
       (map #(-> [:p %]))))

(defn home []
  (html [:div
         [:h1 "David Zukowski"]
         [:section (paragraphs description)]
         [:section
          [:h2 "Writing"]
          [:ul (mapv #(-> [:li (:title %)]) writing)]]
         [:section
          [:h2 "Projects"]
          [:ul (mapv #(-> [:li (:title %)]) projects)]]]))

(def routes
  [{:uri "/" :content home :layout layouts/default}])
