# Use the NodeJS image as builder
FROM node:lts AS builder

# Create the workspace
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy the package file and install dependencies
COPY package.json /usr/src/app
RUN yarn install

# Copy over the source code
COPY src /usr/src/app/src
COPY tsconfig.json /usr/src/app
COPY .postcssrc /usr/src/app

# Build the application
RUN yarn build

# The actual server, this builds the final image
FROM nginx:latest

# Copy the nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the output of the builder
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
RUN chown nginx:nginx /usr/share/nginx/html/ -R
EXPOSE 80
