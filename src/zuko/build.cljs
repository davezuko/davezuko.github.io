(ns zuko.build
  (:require [clojure.pprint :as pp]
            [zuko.routes :refer [routes]]))

(defn exec [cmd]
  (.toString (.execSync (js/require "child_process") cmd)))

(defn clean []
  (exec "rm -rf dist")
  (exec "mkdir dist"))

(defn make []
  (println (pp/pprint ((:content (first routes))))))

(defn -main []
  ; (clean)
  (make))
