FROM node:latest as build-stage
WORKDIR /app
COPY package*.json /app/
COPY yarn.lock /app/
RUN yarn install
COPY . .
RUN yarn build

FROM nginx
COPY Nginx.conf /etc/nginx/conf.d/default.conf 
COPY --from=build-stage /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]