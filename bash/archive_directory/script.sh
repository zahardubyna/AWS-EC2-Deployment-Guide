#!/bin/bash

if [ -z "$1" ]; then
  echo "u need to wrote a directory witch to archive"
  exit 1
fi

dir=$1

if [ ! -d "$dir" ]; then
  echo "directory not found"
  exit 1
fi

find "$dir" -type f -mmin +3 | while read file; do
  zip -r "${file}.zip" "$file"

  if [ $? -eq 0 ]; then
    rm "$file"
    echo "ziped and deleted: $file"
  else
    echo "error in ziped file: $file"
  fi

done