FROM node:18-alpine3.17 as build
WORKDIR /apps/web
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build

FROM node:18-alpine3.17
WORKDIR /apps
COPY --from=build /apps/web/dist ./web/dist
RUN npm i -g serve
CMD ["serve", "./web/dist", "--listen", "3000"]

