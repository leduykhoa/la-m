ARG PHP_VERSION
ARG XDEBUG_CONFIG_REMOTE_HOST
ARG XDEBUG_CONFIG_CLIENT_PORT

FROM php:${PHP_VERSION}-apache

LABEL maintainer="<Lê Duy Khoa>leduykhoa060690@gmail.com"

ENV XDEBUG_CONFIG_REMOTE_HOST=${XDEBUG_CONFIG_REMOTE_HOST}
ENV XDEBUG_CONFIG_CLIENT_PORT=${XDEBUG_CONFIG_CLIENT_PORT}
ENV APACHE_RUN_USER                         www-data
ENV APACHE_RUN_GROUP                        www-data

RUN apt-get update && apt-get install -y wget curl 
RUN apt-get install -y libc-dev pkg-config libonig-dev
RUN apt-get install -y zlib1g-dev libzip-dev libcurl3-openssl-dev libxml2-dev libmcrypt-dev \
    libpq-dev \
    libpng-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev libmagickwand-dev

RUN pecl install mcrypt \
    && pecl install -f xdebug \
    && pecl install -f imagick \
    && pecl install -f xmlrpc-beta \
    && docker-php-ext-install gettext \
    && docker-php-ext-install gd \
    && docker-php-ext-install intl \
    && docker-php-ext-install zip \
    && docker-php-ext-install pcntl \
    && docker-php-ext-install pdo_mysql \
    && docker-php-ext-install mysqli \
    && docker-php-ext-install soap  \
    && docker-php-ext-install bcmath  \
    && docker-php-ext-install exif  \
    && docker-php-ext-install mbstring  \
    && docker-php-ext-enable mcrypt \
    && docker-php-ext-enable imagick \
    && docker-php-ext-enable xdebug

RUN usermod -u 1000 www-data

RUN curl --silent --show-error https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

# RUN apt-get install ssl-cert
# RUN make-ssl-cert generate-default-snakeoil
# RUN usermod --append --groups ssl-cert root
# RUN usermod --append --groups ssl-cert $APACHE_RUN_USER
# RUN ls -l /etc/ssl/certs/ssl-cert-snakeoil.pem /etc/ssl/private/ssl-cert-snakeoil.key

COPY /run.sh /opt/run.sh
RUN chmod +x /opt/run.sh

EXPOSE 80 443

CMD ["/opt/run.sh"]