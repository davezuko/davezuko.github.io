defmodule ZukoMeWeb.PageController do
  use ZukoMeWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
