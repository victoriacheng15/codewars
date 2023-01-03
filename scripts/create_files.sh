#!/usr/bin/env bash

dir=$(pwd)
folder=$(basename "$dir")

title="$(echo "$folder" | sed "s/\b[a-z]/\U&/g" | sed "s/-/ /g")"

if  [ -f README.md ]; then
  echo "README.md exists"
else
  echo "# $title" > README.md
  echo "README.md is created"
fi

# Check if at least one argument was provided
if [ $# -eq 0 ]; then
  echo "Error: No file extensions specified."
  exit 1
fi

# Create a file with each specified extension
for extension in "$@"; do
  touch "$folder.$extension"
  echo "Created file with extension .$extension"
done