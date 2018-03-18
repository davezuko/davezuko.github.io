defmodule ZukoMeWeb.PageController do
  use ZukoMeWeb, :controller

  alias ZukoMe.Posts

  def index(conn, _params) do
    posts = Posts.list_posts()
    projects = [
      %{link: "https://redash.zuko.me", title: "redash: Lightweight Functional Programming for JavaScript"},
      %{link: "https://react-reformed.zuko.me", title: "react-reformed: A Simpler Approach to Forms in React"},
    ]
    render(conn, "index.html", posts: posts, projects: projects)
  end
end
