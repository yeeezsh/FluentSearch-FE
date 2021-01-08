FROM node:14-slim AS base
COPY yarn.lock yarn.lock
COPY package.json package.json
RUN yarn install

FROM base as dev
ADD . .
VOLUME . .
CMD ["yarn", "start"]
EXPOSE 5000

FROM base AS build
ADD . .
RUN yarn test
RUN yarn build


FROM nginx:alpine AS nginx
COPY --from=build /out /var/www
COPY /server/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
