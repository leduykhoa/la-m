#!/bin/bash
echo "Bash version ${BASH_VERSION}..."

git init
git add .
git commit -m "The First!"
git remote add bitbucket https://ottg@bitbucket.org/php_fly/la-m.git
git push bitbucket master

