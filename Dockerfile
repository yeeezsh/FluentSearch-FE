FROM node:14-slim as base
COPY yarn.lock yarn.lock
COPY package.json package.json
RUN yarn install

FROM base as dev
ADD . .
CMD ["yarn", "start"]
EXPOSE 5000

FROM base as uat
ADD . .
CMD ["yarn", "start"]