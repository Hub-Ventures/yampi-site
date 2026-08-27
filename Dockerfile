# Build estático (Astro → dist/)
FROM node:22-alpine3.21 AS build
WORKDIR /app
RUN apk update && apk upgrade --no-cache
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Serve con nginx (puerto 4321 = mismo target que el Landing anterior en Dokploy)
FROM nginx:1.27-alpine AS runtime
RUN apk update && apk upgrade --no-cache
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 4321
CMD ["nginx", "-g", "daemon off;"]
