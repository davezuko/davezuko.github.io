(ns zuko.build
  (:require [fs]
            [path]
            [chalk]
            [clojure.pprint :as pp]
            [zuko.routes :refer [routes]]))

(def OK (.green chalk "✔"))

(defn exec [cmd]
  (.toString (.execSync (js/require "child_process") cmd)))

(defn mkdirp [path]
  (exec (str "mkdir -p " path)))

(defn clean []
  (exec "rm -rf dist")
  (exec "mkdir dist"))

(defn make-route [{uri :uri render :render}]
  (let [build-dir (.resolve path js/__dirname "dist" (str "." uri))
        build-path (.resolve path build-dir "index.html")]
    (println (str "  " OK " " uri))
    (mkdirp build-dir)
    (.writeFileSync fs build-path (render))))

(defn make [routes]
  (run! make-route routes))

(defn -main []
  (clean)
  (println "Building routes...")
  (make routes))
