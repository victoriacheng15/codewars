#!/usr/bin/env bash

dir=$(pwd)
folder=$(basename "$dir")

title="$(echo "$folder" | sed "s/\b[a-z]/\U&/g" | sed "s/-/ /g")"

echo "# $title" >> README.md