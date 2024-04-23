FROM    node:latest
RUN     apt update -y
RUN     apt upgrade -y
RUN     apt install nginx -y
WORKDIR /var/www/html
COPY    src/* .
CMD [ "nginx", "-g", "daemon off;" ]