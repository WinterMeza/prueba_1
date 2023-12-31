#Dependencies
FROM node:19.2-alpine3.16 AS deps
WORKDIR /index
COPY package*.json ./
RUN npm install

#Build y Tests
FROM node:19.2-alpine3.16 AS builder
WORKDIR /index
COPY --from=deps /index/node_modules ./node_modules
COPY . .
RUN npm run build
#RUN npm run test

#Production
FROM node:19.2-alpine3.16 AS prod-deps
WORKDIR /index
COPY package.json package-lock.json ./
RUN npm install --prod

#Execute
FROM node:19.2-alpine3.16 AS runner
WORKDIR /index
COPY --from=prod-deps /index/node_modules ./node_modules
COPY --from=builder /index .
EXPOSE 4000
CMD [ "npm", "run", "start" ]
