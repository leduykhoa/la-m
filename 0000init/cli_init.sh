#!/bin/bash
echo "Bash version ${BASH_VERSION}..."

# ./cli_init.sh
# https://laravel.com/docs/10.x
# https://laravel.com/docs/10.x#getting-started-on-linux
# composer create-project --prefer-dist laravel/laravel:^10.0 la-m
composer create-project --prefer-dist laravel/laravel:^11.x-dev la-m
chmod -R 777 la-m*
# cd la-m
cp -rf ./la-m/* ./
cp -rf ./la-m/.* ./
# ln -s ./storage ./public/storage

composer require laravel/ui
composer require barryvdh/laravel-debugbar --dev
composer require tymon/jwt-auth --dev
composer require symfony/filesystem --dev

php artisan vendor:publish --tag=laravel-pagination
php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"

php artisan ui:auth

cp -rf ./0000init/* ./
cp -rf ./0000init/.env ./.env

./cli_make_class.sh

./cli_package.sh
npm run build

chmod -R 777 ./*
chmod -R 777 ./.*


composer dump-autoload -o
php artisan optimize:clear
php artisan migrate --force
php artisan migrate:fresh --seed