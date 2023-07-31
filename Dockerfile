FROM nginx
LABEL name="manageWeb"
LABEL version="1.0"
COPY . /dist/usr/share/nginx/html
COPY ./manageWeb /etc/nginx/conf.d
EXPOSE 80
