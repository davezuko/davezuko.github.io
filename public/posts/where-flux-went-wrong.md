



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-1e23a207d51b99415349a8278e4e8425a3d5decf40d0b7250b147aaeefeac337.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-a6be22a2877ee0ae350520df78941ecf7599019b31fded938ef98cd11d20ae48.css" media="all" rel="stylesheet" />
    
    
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-9e0f35305336555b58884b07a160747fc1f6dbd79e13e18820a598a9abcb2662.css" media="all" rel="stylesheet" />
    

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>technologyadvice.github.io/2015-12-31-where-flux-went-wrong.markdown at master · TechnologyAdvice/technologyadvice.github.io · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars3.githubusercontent.com/u/6045188?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="TechnologyAdvice/technologyadvice.github.io" name="twitter:title" /><meta content="technologyadvice.github.io - :newspaper: TA Developer Blog" name="twitter:description" />
      <meta content="https://avatars3.githubusercontent.com/u/6045188?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="TechnologyAdvice/technologyadvice.github.io" property="og:title" /><meta content="https://github.com/TechnologyAdvice/technologyadvice.github.io" property="og:url" /><meta content="technologyadvice.github.io - :newspaper: TA Developer Blog" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    
    <meta name="request-id" content="1772A1F1:6BA6:3E0D339:586B1C99" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="1772A1F1:6BA6:3E0D339:586B1C99" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="OWEzYjZmMzE5ZDRkNDdmNTBjNDI1OGU1ZmE4Nzc0ODU4OTIyZTljMTk4MTBlYjczNjBmNTNlMzAyM2FhZmJlNHx7InJlbW90ZV9hZGRyZXNzIjoiMjMuMTE0LjE2MS4yNDEiLCJyZXF1ZXN0X2lkIjoiMTc3MkExRjE6NkJBNjozRTBEMzM5OjU4NkIxQzk5IiwidGltZXN0YW1wIjoxNDgzNDE0NjgxLCJob3N0IjoiZ2l0aHViLmNvbSJ9">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="0057d13c5365a0dd792278c3c69bfcfb25ce812f">

    <meta http-equiv="x-pjax-version" content="7fb075d3d567b9ef7a0b9ba7ee162422">
    

      
  <meta name="description" content="technologyadvice.github.io - :newspaper: TA Developer Blog">
  <meta name="go-import" content="github.com/TechnologyAdvice/technologyadvice.github.io git https://github.com/TechnologyAdvice/technologyadvice.github.io.git">

  <meta content="6045188" name="octolytics-dimension-user_id" /><meta content="TechnologyAdvice" name="octolytics-dimension-user_login" /><meta content="47233820" name="octolytics-dimension-repository_id" /><meta content="TechnologyAdvice/technologyadvice.github.io" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="47233820" name="octolytics-dimension-repository_network_root_id" /><meta content="TechnologyAdvice/technologyadvice.github.io" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/TechnologyAdvice/technologyadvice.github.io/commits/master.atom" rel="alternate" title="Recent Commits to technologyadvice.github.io:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/TechnologyAdvice/technologyadvice.github.io/blob/master/_posts/2015-12-31-where-flux-went-wrong.markdown" data-pjax-transient>
  </head>


  <body class="logged-out  env-production  vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



          <header class="site-header js-details-container" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav site-header-nav-main">
        <a href="/personal" class="js-selected-navigation-item nav-item nav-item-personal" data-ga-click="Header, click, Nav menu - item:personal" data-selected-links="/personal /personal">
          Personal
</a>        <a href="/open-source" class="js-selected-navigation-item nav-item nav-item-opensource" data-ga-click="Header, click, Nav menu - item:opensource" data-selected-links="/open-source /open-source">
          Open source
</a>        <a href="/business" class="js-selected-navigation-item nav-item nav-item-business" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/partners /business/features /business/customers /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item nav-item-explore" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /showcases /explore">
          Explore
</a>      </nav>

      <div class="site-header-actions">
            <a class="btn btn-primary site-header-actions-btn" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
          <a class="btn site-header-actions-btn mr-1" href="/login?return_to=%2FTechnologyAdvice%2Ftechnologyadvice.github.io%2Fblob%2Fmaster%2F_posts%2F2015-12-31-where-flux-went-wrong.markdown" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
      </div>

        <nav class="site-header-nav site-header-nav-secondary mr-md-3">
          <a class="nav-item" href="/pricing">Pricing</a>
          <a class="nav-item" href="/blog">Blog</a>
          <a class="nav-item" href="https://help.github.com">Support</a>
          <a class="nav-item header-search-link" href="https://github.com/search">Search GitHub</a>
              <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/TechnologyAdvice/technologyadvice.github.io/search" class="js-site-search-form" data-scoped-search-url="/TechnologyAdvice/technologyadvice.github.io/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>

        </nav>
    </div>
  </div>
</header>



    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2FTechnologyAdvice%2Ftechnologyadvice.github.io"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/TechnologyAdvice/technologyadvice.github.io/watchers"
     aria-label="10 users are watching this repository">
    10
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2FTechnologyAdvice%2Ftechnologyadvice.github.io"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/TechnologyAdvice/technologyadvice.github.io/stargazers"
      aria-label="1 user starred this repository">
      1
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2FTechnologyAdvice%2Ftechnologyadvice.github.io"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/TechnologyAdvice/technologyadvice.github.io/network" class="social-count"
       aria-label="0 users forked this repository">
      0
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/TechnologyAdvice" class="url fn" rel="author">TechnologyAdvice</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/TechnologyAdvice/technologyadvice.github.io" data-pjax="#js-repo-pjax-container">technologyadvice.github.io</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/TechnologyAdvice/technologyadvice.github.io" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /TechnologyAdvice/technologyadvice.github.io" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/TechnologyAdvice/technologyadvice.github.io/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /TechnologyAdvice/technologyadvice.github.io/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">2</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/TechnologyAdvice/technologyadvice.github.io/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /TechnologyAdvice/technologyadvice.github.io/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">2</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/TechnologyAdvice/technologyadvice.github.io/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /TechnologyAdvice/technologyadvice.github.io/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="counter">0</span>
</a>


  <a href="/TechnologyAdvice/technologyadvice.github.io/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /TechnologyAdvice/technologyadvice.github.io/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/TechnologyAdvice/technologyadvice.github.io/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /TechnologyAdvice/technologyadvice.github.io/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/TechnologyAdvice/technologyadvice.github.io/blob/f5d4c235996bca0bf98714b2f3fbbe104f035263/_posts/2015-12-31-where-flux-went-wrong.markdown" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:e86c2abca3a633c15ccd80c80a06253e -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/TechnologyAdvice/technologyadvice.github.io/blob/article/record-containers/_posts/2015-12-31-where-flux-went-wrong.markdown"
               data-name="article/record-containers"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                article/record-containers
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/TechnologyAdvice/technologyadvice.github.io/blob/better-testing/_posts/2015-12-31-where-flux-went-wrong.markdown"
               data-name="better-testing"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                better-testing
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/TechnologyAdvice/technologyadvice.github.io/blob/devlab-v3/_posts/2015-12-31-where-flux-went-wrong.markdown"
               data-name="devlab-v3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                devlab-v3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/TechnologyAdvice/technologyadvice.github.io/blob/levi-linting/_posts/2015-12-31-where-flux-went-wrong.markdown"
               data-name="levi-linting"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                levi-linting
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/TechnologyAdvice/technologyadvice.github.io/blob/master/_posts/2015-12-31-where-flux-went-wrong.markdown"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/TechnologyAdvice/technologyadvice.github.io/blob/post/flow/_posts/2015-12-31-where-flux-went-wrong.markdown"
               data-name="post/flow"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                post/flow
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/TechnologyAdvice/technologyadvice.github.io/blob/post/make-react-forms-simple-again/_posts/2015-12-31-where-flux-went-wrong.markdown"
               data-name="post/make-react-forms-simple-again"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                post/make-react-forms-simple-again
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/TechnologyAdvice/technologyadvice.github.io/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/TechnologyAdvice/technologyadvice.github.io"><span>technologyadvice.github.io</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/TechnologyAdvice/technologyadvice.github.io/tree/master/_posts"><span>_posts</span></a></span><span class="separator">/</span><strong class="final-path">2015-12-31-where-flux-went-wrong.markdown</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/TechnologyAdvice/technologyadvice.github.io/commit/c208b12c5fce3cafdc789fb419e03bc986902eda" data-pjax>
          c208b12
        </a>
        <relative-time datetime="2016-07-12T18:20:09Z">Jul 12, 2016</relative-time>
      </span>
      <div>
        <img alt="@Fluidbyte" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1153376?v=3&amp;s=40" width="20" />
        <a href="/Fluidbyte" class="user-mention" rel="contributor">Fluidbyte</a>
          <a href="/TechnologyAdvice/technologyadvice.github.io/commit/c208b12c5fce3cafdc789fb419e03bc986902eda" class="message" data-pjax="true" title="Updating code highlight blocks with backtick-delimited md">Updating code highlight blocks with backtick-delimited md</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>3</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="davezuko" href="/TechnologyAdvice/technologyadvice.github.io/commits/master/_posts/2015-12-31-where-flux-went-wrong.markdown?author=davezuko"><img alt="@davezuko" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/6439050?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Fluidbyte" href="/TechnologyAdvice/technologyadvice.github.io/commits/master/_posts/2015-12-31-where-flux-went-wrong.markdown?author=Fluidbyte"><img alt="@Fluidbyte" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1153376?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jhabdas" href="/TechnologyAdvice/technologyadvice.github.io/commits/master/_posts/2015-12-31-where-flux-went-wrong.markdown?author=jhabdas"><img alt="@jhabdas" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/440298?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@davezuko" height="24" src="https://avatars3.githubusercontent.com/u/6439050?v=3&amp;s=48" width="24" />
            <a href="/davezuko">davezuko</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Fluidbyte" height="24" src="https://avatars3.githubusercontent.com/u/1153376?v=3&amp;s=48" width="24" />
            <a href="/Fluidbyte">Fluidbyte</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jhabdas" height="24" src="https://avatars0.githubusercontent.com/u/440298?v=3&amp;s=48" width="24" />
            <a href="/jhabdas">jhabdas</a>
          </li>
      </ul>
    </div>
  </div>


<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/TechnologyAdvice/technologyadvice.github.io/raw/master/_posts/2015-12-31-where-flux-went-wrong.markdown" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/TechnologyAdvice/technologyadvice.github.io/blame/master/_posts/2015-12-31-where-flux-went-wrong.markdown" class="btn btn-sm js-update-url-with-hash BtnGroup-item">Blame</a>
      <a href="/TechnologyAdvice/technologyadvice.github.io/commits/master/_posts/2015-12-31-where-flux-went-wrong.markdown" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>


        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      150 lines (113 sloc)
      <span class="file-info-divider"></span>
    12 KB
  </div>
</div>

  
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><table data-table-type="yaml-metadata">
  <thead>
  <tr>
  <th>layout</th>

  <th>title</th>

  <th>date</th>

  <th>updated</th>

  <th>author</th>

  <th>categories</th>

  <th>cover</th>

  <th>description</th>

  <th>comments</th>

  <th>disqus</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><div>post</div></td>

  <td><div>Where Flux Went Wrong</div></td>

  <td><div>2015-12-31 07:00:00 -0800</div></td>

  <td><div>2015-12-31 06:00:00 -0800</div></td>

  <td><div>david.zukowski</div></td>

  <td><div>development javascript reactjs flux redux</div></td>

  <td><div>/assets/images/covers/spiral-stairs.jpg</div></td>

  <td><div>Regain your sanity by pulling application state out of ReactJS components.</div></td>

  <td><div>true</div></td>

  <td><div>true</div></td>
  </tr>
  </tbody>
</table>

<blockquote>
<p>Already comfortable with the history around ReactJS and Flux? Skip to <a href="#flux-and-component-state">Flux and Component State</a> to jump right into the problem statement.</p>
</blockquote>

<p>Ahem. When <a href="https://github.com/facebook/react">ReactJS</a> first entered the development scene it attracted front-end developers across the world with its promise to introduce some semblance of sanity back into the dreaded Single Page Application. The framework, commonly referred to as the <strong>V</strong> in MVC, popularized the concept of componentized applications; that is, everything you see on the page is a React component. "Rid yourself of complicated controllers and unintelligible views!" it shouted from the rooftops (if you're not cool with the personification of a JavaScript framework, just imagine it's Pete Hunt), and, of course, developers rejoiced and all was right in the world.</p>

<p>Except it never works like that. Many a blog writer saw fit to speak out against the blasphemous JSX and comingling of markup and JavaScript; a war which still rages today, though with far less fury. The intricacies of these arguments are not vital to the point of this post, but it's important to note that React didn't receive unanimous support upon release, nor can it boast such a claim even today. What is important, however, is that it introduced a paradigm shift for front end development. Developers were no longer frought with fear over a labor necessitated by nearly all applications based on jQuery, AngularJS, or any of their kin: imperative DOM manipulation. They traded that imperative complexity for something more declarative: properties (props if you're hip) enter a React component, travel through the magical lands of the render cycle and VirtualDOM and, arriving at the end of their journey, some diffing occurs and they find themselves all grown up as part of the real DOM.</p>

<p>The internals are complicated, but the effect is simple: no more stressing about the DOM. Still, being only the <strong>V</strong> in MVC, some sort of larger structure had to be built around React in order to actually do things; you know, talk to the server, respond to events, and, most importantly, write TodoMVC’s. This is where Flux comes in, and it's also about the point where I begin to argue that React really <em>isn't</em> just the <strong>V</strong> in MVC because it encourages and lends itself to a not-so-MVC approach to application architecture. So what is that approach? You've probably heard of it: <a href="https://github.com/facebook/flux">Flux</a>. There isn't enough time to cover the full history of Flux and all 52 of its flavors, but the gist is: components/views don't manipulate application state directly, they dispatch actions that effect changes in stores, and those changes flow back through the application from top to bottom. The result: one-way data flow.</p>

<p>Here's what just one small piece of this (the component) might look like:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>
<span class="pl-k">import</span> <span class="pl-smi">autobind</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>autobind-decorator<span class="pl-pds">'</span></span>
<span class="pl-k">import</span> <span class="pl-smi">TodoStore</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>stores/todo<span class="pl-pds">'</span></span>
<span class="pl-k">import</span> <span class="pl-c1">*</span> <span class="pl-k">as</span> <span class="pl-smi">TodoActions</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>actions/todo<span class="pl-pds">'</span></span>

<span class="pl-c"><span class="pl-c">//</span> Sick of TodoMVC? Me too.</span>
<span class="pl-k">class</span> <span class="pl-en">TodoList</span> <span class="pl-k">extends</span> <span class="pl-e">React</span>.<span class="pl-smi">Component</span> {
  <span class="pl-en">constructor </span>() {
    <span class="pl-c1">super</span>()
    <span class="pl-c1">this</span>.<span class="pl-smi">state</span> <span class="pl-k">=</span> {
      todos<span class="pl-k">:</span> <span class="pl-smi">TodoStore</span>.<span class="pl-en">getTodos</span>()
    }
  }

  <span class="pl-en">componentDidMount</span> () {
    <span class="pl-smi">TodoStore</span>.<span class="pl-en">addChangeListener</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_onTodoStoreChange</span>)
  }

  <span class="pl-en">componentDidUnmount</span> () {
    <span class="pl-smi">TodoStore</span>.<span class="pl-en">removeChangeListener</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_onTodoStoreChange</span>)
  }

  @autobind
  <span class="pl-en">_onTodoStoreChange</span> () {
    <span class="pl-c1">this</span>.<span class="pl-en">setState</span>({
      todos<span class="pl-k">:</span> <span class="pl-smi">TodoStore</span>.<span class="pl-en">getTodos</span>()
    })
  }

  <span class="pl-en">_onToggleTodoComplete</span> (<span class="pl-smi">id</span>) {
    <span class="pl-smi">TodoActions</span>.<span class="pl-en">toggleTodoComplete</span>(id)
  }

  <span class="pl-en">render</span> () {
    <span class="pl-k">return</span> (
      <span class="pl-k">&lt;</span>ul<span class="pl-k">&gt;</span>
        {<span class="pl-c1">this</span>.<span class="pl-smi">state</span>.<span class="pl-smi">todos</span>.<span class="pl-en">map</span>(<span class="pl-smi">todo</span> <span class="pl-k">=&gt;</span> (
          <span class="pl-k">&lt;</span>li key<span class="pl-k">=</span>{<span class="pl-smi">todo</span>.<span class="pl-c1">id</span>} onClick<span class="pl-k">=</span>{() <span class="pl-k">=&gt;</span> <span class="pl-c1">this</span>.<span class="pl-en">_onToggleTodoComplete</span>(<span class="pl-smi">todo</span>.<span class="pl-c1">id</span>)}<span class="pl-k">&gt;</span>
            {<span class="pl-smi">todo</span>.<span class="pl-c1">text</span>}
          <span class="pl-k">&lt;</span><span class="pl-k">/</span>li<span class="pl-k">&gt;</span>
        ))
      <span class="pl-k">&lt;</span><span class="pl-k">/</span>ul<span class="pl-k">&gt;</span>
    )
  }
}</pre></div>

<p>As you can see, the todos represented in the view are not managed by the component but instead live in a store. We've managed to create a single source of truth for the todos by way of the TodoStore. Some state has been eliminated from our component, but it's not perfect.</p>

<h2><a id="user-content-flux-and-component-state" class="anchor" href="#flux-and-component-state" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Flux and Component State</h2>

<p>So what exactly is the problem with traditional Flux? Well, surprisingly, it's not the verbosity of it all. Many initial abstractions sought to reduce syntactical boilerplate but missed something so painfully obvious it hurts to look back on and realize that you didn’t see it either. <em>The real issue with its design is that application state (read: stuff from stores) must be applied to local component state</em>. How does one go about testing a component given this architecture? Well, now that it’s coupled to one or more stores, you’ll have the added work of mocking stores and actions before you can properly determine what your component looks like at the end of it all (and don't forget to check the store shape, too). Yes, the core problem with this pattern is the usage of <code>this.state</code>.</p>

<blockquote>
<p>State is the root of all evil</p>

<ul>
<li>Pete Hunt</li>
</ul>
</blockquote>

<p>So of course React avoids state, right? Right Pete Hunt?</p>

<div>
  <a href="https://camo.githubusercontent.com/884f95502d9c61e8bc644444e8cf3ba895144810/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f33787a3242574b425a654d38684e574f46472f67697068792e676966" target="_blank"><img src="https://camo.githubusercontent.com/884f95502d9c61e8bc644444e8cf3ba895144810/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f33787a3242574b425a654d38684e574f46472f67697068792e676966" data-canonical-src="https://media.giphy.com/media/3xz2BWKBZeM8hNWOFG/giphy.gif" style="max-width:100%;"></a>
</div>

<p>Proofing this post sounds like I have a beef with Pete Hunt, but I'm only kidding; I wouldn't be where I am today without his <a href="https://www.youtube.com/watch?v=KtmjkCuV-EU">inspirational talks</a>. However, in all seriousness, state is in fact a core feature of React components -- it's literally called <code>this.state</code> -- and it is the yin to a component's yang (props). Local state makes it difficult to determine how a component will render because the logic determining its output is internal to the instance and can change without you ever having known, and that’s just not cool, man. What you have here is a rotten case of an impure function and, if that’s not enough to set you to quaking, not only does that make testing more difficult, your component’s dependence on a specific Flux store prevents it it from being reused in different contexts.</p>

<p>Looking back at our previous example, what makes a <code>&lt;TodoList /&gt;</code> component so special that it needs to know how to retrieve its own data? Its objective is simply to render a list of todos, maybe have a handler in there to toggle completion, but nothing more, and even that handler can be passed via props; it has no need for internal state. Yet all of the early flux abstractions, while often reducing the amount of boilerplate needed to apply some global state to local component state, still did exactly that: relied on <code>this.state</code>. We're not much better off than in the pre-React days at this point; yes, we've gained some benefits with the VDOM and declarative rendering, but we're still left with local state that severely complicates testing, couples components to specific stores, and increases the application's cognitive overhead (I will jump through hoops all day not say "it makes applications difficult to reason about").</p>

<p>We need a new approach.</p>

<h2><a id="user-content-a-better-way-forward" class="anchor" href="#a-better-way-forward" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A Better Way Forward</h2>

<p>So what can be done resolve this predicament? Enter <a href="https://github.com/rackt/redux">Redux</a>, a Flux paradigm that is better for all the ways that it eschews Flux's original implementation. There are many things that make Redux great, but the focus for this post is something specific that I find many Redux posts gloss over: <a href="https://github.com/rackt/react-redux">react-redux</a>'s <code>connect</code> decorator. What <a href="https://twitter.com/dan_abramov">Dan Abramov</a>, Redux’s creator and our lord and savior, figured out was that higher-order components could be used to abstract away the store subscription in a way that not only reduced boilerplate, but totes flipped the script on us and altered how application state enters a component. Let’s take a look:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>
<span class="pl-k">import</span> { <span class="pl-smi">connect</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react-redux<span class="pl-pds">'</span></span>
<span class="pl-k">import</span> { <span class="pl-smi">actions</span> <span class="pl-k">as</span> <span class="pl-smi">TodoActions</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>modules/todo<span class="pl-pds">'</span></span>

<span class="pl-c"><span class="pl-c">//</span> Notice that we can export the raw class here as a named</span>
<span class="pl-c"><span class="pl-c">//</span> export, which means we can easily use the non-connected</span>
<span class="pl-c"><span class="pl-c">//</span> version in our tests or elsewhere in the application.</span>
<span class="pl-k">export</span> <span class="pl-k">class</span> <span class="pl-en">TodoList</span> <span class="pl-k">extends</span> <span class="pl-e">React</span>.<span class="pl-smi">Component</span> {
  <span class="pl-k">static</span> propTypes <span class="pl-k">=</span> {
    dispatch<span class="pl-k">:</span> <span class="pl-smi">React</span>.<span class="pl-smi">PropTypes</span>.<span class="pl-smi">func</span>.<span class="pl-smi">isRequired</span>,
    todos<span class="pl-k">:</span> <span class="pl-smi">React</span>.<span class="pl-smi">PropTypes</span>.<span class="pl-smi">array</span>.<span class="pl-smi">isRequired</span>,
  }

  <span class="pl-en">_onToggleComplete</span> (<span class="pl-smi">id</span>) {
    <span class="pl-c1">this</span>.<span class="pl-smi">props</span>.<span class="pl-en">dispatch</span>(<span class="pl-smi">TodoActions</span>.<span class="pl-en">toggleTodoComplete</span>(id))
  }

  <span class="pl-en">render</span> () {
    <span class="pl-k">return</span> (
      <span class="pl-k">&lt;</span>ul<span class="pl-k">&gt;</span>
        {<span class="pl-c1">this</span>.<span class="pl-smi">props</span>.<span class="pl-smi">todos</span>.<span class="pl-en">map</span>(<span class="pl-smi">todo</span> <span class="pl-k">=&gt;</span> (
          <span class="pl-k">&lt;</span>li key<span class="pl-k">=</span>{<span class="pl-smi">todo</span>.<span class="pl-c1">id</span>} onClick<span class="pl-k">=</span>{() <span class="pl-k">=&gt;</span> <span class="pl-c1">this</span>.<span class="pl-en">_onToggleTodoComplete</span>(<span class="pl-smi">todo</span>.<span class="pl-c1">id</span>)}<span class="pl-k">&gt;</span>
            {<span class="pl-smi">todo</span>.<span class="pl-c1">text</span>}
          <span class="pl-k">&lt;</span><span class="pl-k">/</span>li<span class="pl-k">&gt;</span>
        ))}
      <span class="pl-k">&lt;</span><span class="pl-k">/</span>ul<span class="pl-k">&gt;</span>
    )
  }
}

<span class="pl-k">export</span> <span class="pl-c1">default</span> <span class="pl-smi">connect</span>(<span class="pl-smi">state</span> <span class="pl-k">=&gt;</span> ({
  todos<span class="pl-k">:</span> <span class="pl-smi">state</span>.<span class="pl-smi">todos</span>
})(TodoList)</pre></div>

<p>Now, since the Redux <a href="http://rackt.org/redux/index.html">documentation</a> is awesome I’m not going to spend time covering this in great detail, but we’ll discuss the most important point: where is the <code>&lt;TodoList /&gt;</code> component receiving the todos from? And I don’t mean that they live in a store, but rather that they are entering the component as <strong>props</strong>.</p>

<p>The <code>connect</code> decorator is a higher-order component, a React component that wraps (i.e. renders) another component. Component state hasn't completely packed its bags, since it is still used within the component generated by <code>connect</code>, but it's been abstracted away and we don't have to fret over it. We invoke <code>connect</code> just like we would any other function, passing it some arguments (in this example we provide <code>mapStateToProps</code> to tell it exactly what state slice we want from the global state) before finally handing it our component. When the higher-order component renders, it uses the arguments we provided to determine what props to pass down. That's right, our component is rendered <em>inside of it</em>, which means we receive application state just like we would anything else in React land: as good old fashioned props.</p>

<p>This seemingly simple change has enormous benefits in practice:</p>

<ol>
<li>The base component (<code>TodoList</code>) can now be tested entirely independently from any stores or global state. We can simply import it into our favorite test suite, pass it some props, and see how it renders. No need to mock any stores.</li>
<li>The base component can be freely shared across the application, since the class isn't directly tied to any one store. We can wrap it in entirely different higher order components, <code>connect</code> it with totally different state selectors, or even just pass it a plain-old array of todos.</li>
<li>You can now rest easy knowing that if you give your component a set of props, you know <em>exactly</em> how it will function.</li>
</ol>

<p>The point is: the component no longer cares where it gets its data from, that's not its concern (and rightly so). And though in this case we're using <code>react-redux</code> to create the container, the component itself is not actually tied to any specific framework and now behaves just like any other simpleminded React component. There are a slew of other benefits to this pattern, such as the ability to implement performance optimizations for state selectors (see: <a href="https://github.com/rackt/reselect">reselect</a>), but at the end of the day the important part is that our components are once again sane and devoid of local state.</p>

<h2><a id="user-content-in-summary" class="anchor" href="#in-summary" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>In Summary</h2>

<p>State is a major contributor to application complexity, and looking back it's part of the reason why (to many, not all) React seemed like such a breath of fresh air after the two-way data binding craze. It showed us that we could break even the most complex applications down into managable pieces, so let's not turn our backs on that by reintroducing state where it's not needed. It's been argued, quite convincingly, that component state be <a href="http://reactkungfu.com/2015/09/common-react-dot-js-mistakes-unneeded-state/">avoided</a>, even outside of the context of Flux, and doing so even opens up <a href="https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components">potential future optimizations</a>. Sometimes all you need is a new way of looking at things.</p>

<p>Thanks Dan.</p>
</article>
  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.04896s from github-fe118-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
      </button>
      You can't perform that action at this time.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/compat-30ce4c86c27f88c3d1b4eb03efda59b45d8d7c871880dee0b8f73d5ef1b25fdf.js"></script>
      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-3b765f1b559374b57faf3815a186f3cfc3af05d277e07c93c6a3e624585b9196.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-0310ab7f468bc1acf5b143963905de7a48cb36602f5d5ff7f735fea57ffd1447.js"></script>
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>

  </body>
</html>

