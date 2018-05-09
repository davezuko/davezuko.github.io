(ns zuko.layouts.main
  (:require [zuko.utils :refer [html]]))

(def stylesheet "*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif});line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:0.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,html [type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px}[type=\"search\"]::-webkit-search-cancel-button,[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}*,*::before,*::after{box-sizing:border-box}html{font-size:62.5%}html,body{margin:0;padding:0}body{color:#3A4145;font-family:\"Merriweather\",sans-serif;font-size:1.8rem;line-height:1.75em}h1,h2,h3,h4,h5,h6{font-family:\"Open Sans\",sans-serif}h1{line-height:1.35em}pre,code{white-space:pre}.highlight{background:#efefef;color:#586e75}.highlight .hll{background-color:#ffffcc}.highlight .c{color:#93a1a1;font-style:italic}.highlight .g{color:#d33682}.highlight .k{color:#859900}.highlight .l{color:#2aa198}.highlight .n{color:#268bd2}.highlight .cm,.highlight .cp,.highlight .c1,.highlight .cs{color:#93a1a1;font-style:italic}.highlight .gd,.highlight .ge,.highlight .gr,.highlight .gh,.highlight .gi,.highlight .go,.highlight .gp,.highlight .gs,.highlight .gu,.highlight .gt{color:#d33682}.highlight .kc{color:#859900;font-weight:bold}.highlight .kd{color:#859900}.highlight .kn{color:#dc322f;font-weight:bold}.highlight .kp,.highlight .kr{color:#859900}.highlight .kt{color:#859900;font-weight:bold}.highlight .ld{color:#2aa198}.highlight .m{color:#2aa198;font-weight:bold}.highlight .s{color:#2aa198}.highlight .na{color:#268bd2}.highlight .nb,.highlight .nc{color:#cb4b16}.highlight .no,.highlight .nd,.highlight .ni,.highlight .ne,.highlight .nf,.highlight .nl,.highlight .nn,.highlight .nx,.highlight .py{color:#268bd2}.highlight .nt{color:#268bd2;font-weight:bold}.highlight .nv{color:#268bd2}.highlight .ow{color:#859900}.highlight .w{color:#586e75}.highlight .mf,.highlight .mh,.highlight .mi,.highlight .mo{color:#2aa198;font-weight:bold}.highlight .sb,.highlight .sc,.highlight .sd,.highlight .s2,.highlight .se,.highlight .sh,.highlight .si,.highlight .sx,.highlight .sr,.highlight .s1,.highlight .ss{color:#2aa198}.highlight .bp{color:#cb4b16}.highlight .vc,.highlight .vg,.highlight .vi{color:#268bd2}.highlight .il{color:#2aa198;font-weight:bold}main{max-width:1000px;margin:0 auto;padding:0 1.75rem}.post{width:80%;max-width:710px;margin:0 auto}")

(defn render [content]
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
        [:link {:rel "stylesheet" :href "https://fonts.googleapis.com/css?family=Open+Sans|Merriweather:300,300italic"}]
        [:style stylesheet]]
      [:body
       [:main content]]]))
