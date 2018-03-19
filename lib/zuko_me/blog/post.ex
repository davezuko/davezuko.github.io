defmodule ZukoMe.Blog.Post do
  use Ecto.Schema
  import Ecto.Changeset
  alias ZukoMe.Blog.Post

  schema "posts" do
    field :title, :string
    field :slug, :string
    field :content, :string
    field :created_at, :string
  end

  @doc false
  def changeset(%Post{} = post, attrs) do
    post
    |> cast(attrs, [])
    |> validate_required([])
  end
end
