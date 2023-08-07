# Stage 1: Build the Angular application
FROM node:14 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the Angular application with nginx
FROM nginx:alpine
COPY --from=build /app/dist/DataStructuresAndAlgorithms /usr/share/nginx/html
EXPOSE 1200
CMD ["nginx", "-g", "daemon off;"]

