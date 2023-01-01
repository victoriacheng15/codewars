#!/usr/bin/env bash

# specify the directory containing the folders
directory="."

# iterate through the folders in the directory
for foldername in "$directory"/*; do
    # rename the folder by replacing the hyphen with a space
    new_name="$(basename "$foldername" | sed 's/ /-/g')"
    mv "$foldername" "$directory/$new_name"
done