#!/bin/bash

# ./cli_clear_temp.sh
echo "Bash version ${BASH_VERSION}..."

mkdir ./storage/framework/cache -p
mkdir ./storage/framework/sessions -p
mkdir ./storage/framework/testing -p
mkdir ./storage/framework/views -p
mkdir ./storage/logs -p

chmod -R 777 ./storage*

rm -rf ./storage/debugbar/*
rm -rf ./storage/framework/cache/data/*
rm -rf ./storage/framework/sessions/*
rm -rf ./storage/framework/testing/*
rm -rf ./storage/framework/views/*
rm -rf ./storage/logs/laravel*