FROM node

ARG NPM_TOKEN

# Base installation
WORKDIR /service
COPY . .

# Dependencies installation
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> .npmrc \
    && yarn install \
    && rm .npmrc

# Build
RUN yarn build

EXPOSE 3000

ENTRYPOINT ["yarn", "server:production"]