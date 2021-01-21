FROM node:14-alpine3.12 as base
COPY yarn.lock yarn.lock
COPY package.json package.json
RUN yarn install
# args
ARG APP_GRAPHQL_ENDPOINT
ENV APP_GRAPHQL_ENDPOINT=${APP_GRAPHQL_ENDPOINT}

FROM base as dev
ADD . .
VOLUME [ "/src" ]
CMD ["yarn", "dev"]
EXPOSE 3000

FROM base AS build
ADD . .
RUN yarn test
RUN yarn build


FROM nginx:alpine AS nginx
COPY --from=build /out /var/www
COPY /server/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
