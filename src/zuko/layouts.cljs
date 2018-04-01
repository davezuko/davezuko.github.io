(ns zuko.layouts
  (:require [zuko.utils :refer [html]]))

(defn default [content]
  (html
    [:html {:class "no-js"}
      [:head
        [:meta {:charset "utf-8"}]
        [:meta {:http-equiv "x-ua-compatible" :content "ie=edge"}]
        [:link {:rel "apple-touch-icon" :sizes "180x180" :href "/apple-touch-icon.png"}]
        [:link {:rel "icon" :type "image/png" :sizes "32x32" :href "/favicon-32x32.png"}]
        [:link {:rel "icon" :type "image/png" :sizes "16x16" :href "/favicon-16x16.png"}]
        [:link {:rel "manifest" :href "/manifest.json"}]
        [:link {:rel "mask-icon" :href "/safari-pinned-tab.svg" :color "#5bbad5"}]
        [:meta {:name "viewport" :content "width=device-width,initial-scale=1,shrink-to-fit=no"}]
        [:meta {:name "google-site-verification" :content "hvYlF72G6vlrz-XLjdsyLaEhqsmPDRYy2qR96KHmXhY"}]
        [:meta {:name "description" :content "Homepage for David Zukowski"}]
        [:meta {:name "author" :content "David Zukowski"}]
        [:link {:rel "stylesheet" :href "https://fonts.googleapis.com/css?family=Open+Sans|Merriweather:300,300italic"}]]
      [:body
       [:main content]]]))
