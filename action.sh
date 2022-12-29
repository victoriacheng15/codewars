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


# specify the directory containing the folders
directory="."

# iterate through the folders in the directory
for foldername in "$directory"/*; do
    # rename the folder by replacing the hyphen with a space
    new_name="$(basename "$foldername" | sed 's/-/ /g')"
    mv "$foldername" "$directory/$new_name"
done