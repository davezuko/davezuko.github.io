defmodule ZukoMeWeb.PostController do
  use ZukoMeWeb, :controller

  alias ZukoMe.Posts

  def index(conn, _params) do
    posts = Posts.list_posts()
    render(conn, "index.html", posts: posts)
  end

  def show(conn, %{"id" => id}) do
    post = Posts.get_post!(id)
    render(conn, "show.html", post: post)
  end
end
