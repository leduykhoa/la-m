#!/bin/bash
echo "Bash version ${BASH_VERSION}..."

# ./cli_make_class.sh

php artisan make:model Menu
php artisan make:model MenuItem
php artisan make:model Permission
php artisan make:model Role
php artisan make:model RoleGroup
php artisan make:model RoleGroupRole
php artisan make:model RoleGroupUser
php artisan make:model RolePermission
php artisan make:model RolePermissionSpecial

php artisan make:model Setting
php artisan make:model Oauth
php artisan make:model Country
php artisan make:model CountryUnit
php artisan make:model Region
php artisan make:model Province
php artisan make:model District
php artisan make:model Ward

php artisan make:model File
php artisan make:model Document

php artisan make:model BlogType
php artisan make:model BlogCategory
php artisan make:model BlogPost
php artisan make:model BlogPostCategory
php artisan make:model BlogPostComment

php artisan make:model Location
php artisan make:model Department
php artisan make:model Staff
php artisan make:model StaffRolePermission

php artisan make:model Category
php artisan make:model Product
php artisan make:model ProductPackage
php artisan make:model ProductCategory
php artisan make:model ProductMaterial

php artisan make:model Order
php artisan make:model OrderItem

php artisan make:model Transfer
php artisan make:model TransferItem

php artisan make:model QrCode
php artisan make:model QrCodePackage
php artisan make:model QrCodeMaterial

php artisan make:seeder ZzzzzzSeeder

php artisan make:service SettingService
php artisan make:service BlogService
php artisan make:service ProductService
php artisan make:service QrCodeService
php artisan make:service OauthService
php artisan make:service Gs1Service
php artisan make:service RemoveService

