#!/usr/bin/env bash

# specify the directory containing the files
# directory="."

# # create a dictionary to store the groups of files
# declare -A groups

# # iterate through the files in the directory
# for filename in "$directory"/*; do
#     # get the name of the file without the extension
#     name="${filename%.*}"
#     # echo $name

#     # create a new group for the file if it doesn't already exist
#     if [ -z "${groups[$name]}" ]; then
#         groups[$name]=""
#     fi

#     # add the file to its group
#     groups[$name]="${groups[$name]} $filename"
# done

# # create a new directory for each group of files
# for name in "${!groups[@]}"; do
#     group_dir="$directory/$name"
#     mkdir "$group_dir"

#     # move the files into the new directory
#     for filename in ${groups[$name]}; do
#         mv "$filename" "$group_dir"
#     done
# done