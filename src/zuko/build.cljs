(ns zuko.build
  (:require [fs]
            [path]
            [clojure.pprint :as pp]
            [zuko.routes :refer [routes]]))

(defn exec [cmd]
  (.toString (.execSync (js/require "child_process") cmd)))

(defn mkdirp [path]
  (exec (str "mkdirp " path)))

(defn clean []
  (exec "rm -rf dist")
  (exec "mkdir dist"))

(def dev? true)

(defn make-route [{uri :uri render :render}]
  (let [build-dir (.resolve path js/__dirname "dist" (str "." uri))
        build-path (.resolve path build-dir "index.html")]
    (println (str "Build route " uri))
    (when (not dev?)
      (mkdirp build-dir)
      (.writeFileSync fs build-path (render)))))

(defn make [routes]
  (run! make-route routes))

(defn -main []
  (when (not dev?) (clean))
  (make routes))
