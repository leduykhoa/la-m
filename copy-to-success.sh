#!/bin/bash

echo "Bash version ${BASH_VERSION}..."

# ./copy-to-success.sh

# if [ -z "$1" ]; then
#     echo "Parameter is Null value"
#     exit 1
# fi 
CWD=$(basename "$PWD")
date=`date +%Y%m%d_%H%M%S`
path="$PWD/.."
name=$CWD"_"$date

if [ ! -d $path/$name ]; then
    rm -rf $path/$name
fi

mkdir -p $path/$name
mkdir -p $path/$name/storage

# rm -rf ./storage/app/public/uploads/*
# rm -rf ./storage/debugbar/*
# rm -rf ./storage/framework/cache/data/*
# rm -rf ./storage/framework/sessions/*
# rm -rf ./storage/framework/testing/*
# rm -rf ./storage/framework/views/*
# rm -rf ./storage/logs/laravel*

# cp -rf ./index.php $path/$name/
cp -rf ./app $path/$name/
cp -rf ./apache $path/$name/
cp -rf ./bootstrap $path/$name/
cp -rf ./config $path/$name/
cp -rf ./database $path/$name/
cp -rf ./public $path/$name/
cp -rf ./resources $path/$name/
cp -rf ./routes $path/$name/
# cp -rf ./storage $path/$name/
# cp -rf ./storage/file_example $path/$name/storage/file_example
cp -rf ./stubs $path/$name/
# cp -rf ./table_collection $path/$name/
cp -rf ./artisan $path/$name/
cp -rf ./composer.json $path/$name/
cp -rf ./composer.lock $path/$name/
cp -rf ./docker-compose.yml $path/$name/
cp -rf ./package.json $path/$name/
cp -rf ./package-lock.json $path/$name/
cp -rf ./phpunit.xml $path/$name/
cp -rf ./.editorconfig $path/$name/
cp -rf ./.env $path/$name/
cp -rf ./.env.example $path/$name/
cp -rf ./.gitattributes $path/$name/
cp -rf ./.gitignore $path/$name/
cp -rf ./0000init $path/$name/
cp -rf ./copy-to-success.sh $path/$name/
cp -rf ./cli_clear.sh $path/$name/
cp -rf ./cli_init.sh $path/$name/
cp -rf ./cli_make_class.sh $path/$name/
cp -rf ./cli_deploy.sh $path/$name/
cp -rf ./cli_package.sh $path/$name/
cp -rf ./mix-manifest.json $path/$name/
cp -rf ./create_base_table.php $path/$name/
cp -rf ./editor-build.js $path/$name/
cp -rf ./languages.csv $path/$name/
cp -rf ./languages.js $path/$name/
cp -rf ./render_migration_file.js $path/$name/
cp -rf ./render_migration_file.json $path/$name/
cp -rf ./vite.config.js $path/$name/
# cp -rf ./webpack.config.js $path/$name/
# cp -rf ./webpack.mix.js $path/$name/

rm -rf $path/$name/database/seeders/db.sql
rm -rf $path/$name/database/seeders/*.json

tar -cvzf $PWD/../$name.tar.gz $path/$name/
