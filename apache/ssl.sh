#!/bin/sh

# ./apache/ssl.sh

echo "Bash version ${BASH_VERSION}..."


ssl_path="./apache/ssl"
if [ -d $ssl_path ]; then
   rm -f $ssl_path/*
else
   mkdir -p $ssl_path
fi

openssl genrsa -out $ssl_path/web-fast.com.key
# openssl req -new -key $ssl_path/web-fast.com.key -out $ssl_path/web-fast.com.csr -subj "/C=VN/ST=HaNoi/L=CoLoa/O=WebFast/OU=WebFast/CN=*.php-dev.com"
openssl req -new -key $ssl_path/web-fast.com.key -out $ssl_path/web-fast.com.csr -subj "/C=VN/ST=HaNoi/L=CoLoa/O=WebFast/OU=WebFast/CN=localhost"
openssl x509 -req -days 3650 -in $ssl_path/web-fast.com.csr -signkey $ssl_path/web-fast.com.key -out $ssl_path/web-fast.com.crt

# openssl rsa -noout -modulus -in apache/ssl/web-fast.com.key
# openssl req -noout -modulus -in apache/ssl/web-fast.com.csr
# openssl x509 -in apache/ssl/web-fast.com.crt -text
