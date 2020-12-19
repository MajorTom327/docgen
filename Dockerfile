FROM node

ARG NPM_TOKEN

# Base installation
WORKDIR /service
COPY .package.json .

# Dependencies installation
RUN  yarn install

COPY . .
# Build
RUN yarn build

EXPOSE 3000

ENTRYPOINT ["yarn", "server:production"]