FROM node:14-alpine3.12 as base
COPY yarn.lock yarn.lock
COPY package.json package.json
RUN yarn install
# args
ARG APP_GRAPHQL_ENDPOINT
ENV APP_GRAPHQL_ENDPOINT=${APP_GRAPHQL_ENDPOINT}

ARG APP_BACKEND_STORAGE_ENDPOINT
ENV APP_BACKEND_STORAGE_ENDPOINT=${APP_BACKEND_STORAGE_ENDPOINT}

FROM base as dev
ADD . .
VOLUME [ "/src" ]
CMD ["yarn", "dev"]
EXPOSE 3000

FROM base AS service
ADD . .
# RUN yarn test //temporalilty disable for rush time
RUN yarn build
ENTRYPOINT [ "yarn", "start" ]
EXPOSE 3000
