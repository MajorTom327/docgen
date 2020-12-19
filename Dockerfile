FROM node

# Base installation
WORKDIR /service
COPY . .

# Dependencies installation
RUN  yarn install

# Env
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
ENV MONGO_URL=mongodb://mongo:27017/docgen
ENV GOTENBERG_URL=http://gotenberg:3000

# Build
RUN yarn build

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]