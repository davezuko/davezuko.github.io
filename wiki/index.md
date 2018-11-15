# show files in git repo matching pattern, sorted by date
git ls-tree -r --name-only HEAD | grep {{pattern}} | while read filename; do
  echo "$(git log -1 --format="%ai" -- $filename) $filename"
done | sort
