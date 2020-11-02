FROM node:14-slim AS dev
COPY yarn.lock yarn.lock
COPY package.json package.json
RUN yarn install
ADD . .
VOLUME . .
CMD ["yarn", "start"]
EXPOSE 5000

FROM node:14-slim AS build
COPY yarn.lock yarn.lock
COPY package.json package.json
RUN yarn install
ADD . .
CMD ["yarn", "build"]


FROM nginx:alpine AS nginx
COPY --from=build /out /var/www
COPY /server/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]