#!/bin/bash
echo "Bash version ${BASH_VERSION}..."

mkdir ./storage/framework/cache -p
mkdir ./storage/framework/sessions -p
mkdir ./storage/framework/testing -p
mkdir ./storage/framework/views -p
mkdir ./storage/logs -p

chmod -R 777 ./storage/app/public*
chmod -R 777 ./storage/debugbar*
chmod -R 777 ./storage/framework*
chmod -R 777 ./storage/framework/cache*
chmod -R 777 ./storage/framework/sessions*
chmod -R 777 ./storage/framework/testing*
chmod -R 777 ./storage/framework/views*
chmod -R 777 ./storage/logs*

chmod -R 777 ./bootstrap/cache*
chmod -R 777 ./vendor*

composer dump-autoload
php artisan cache:clear
php artisan config:clear 
php artisan route:clear 
php artisan view:clear
php artisan optimize:clear