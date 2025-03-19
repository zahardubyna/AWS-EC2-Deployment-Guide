#!/bin/bash

function chmod_dir() {
  local dir="$1"

  find "$dir" -maxdepth 1 -type f | while read file; do
    chmod 660 "$file"
  done

  find "$dir" -maxdepth 1 -type d ! -path "$dir" | while read subdir; do
    chmod 770 "$subdir"
    chmod_dir "$subdir"
  done
}

if [ -z "$1" ]; then
  echo "enter the directory"
  exit 1
fi

if [ ! -d "$1" ]; then
  echo "directory not found"
  exit 1
fi

dir=$1

while true; do
  chmod_dir $dir
  sleep 5
done


