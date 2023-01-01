#!/usr/bin/env bash

dir=$(pwd)

folder="$(basename $dir)"

echo $folder

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