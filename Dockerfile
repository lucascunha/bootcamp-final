#FROM node:11.13.0-alpine
# FROM node:12.17.0-alpine
FROM node:12.22.0-alpine
#FROM node:12.20.0-alpine
# FROM node:12.16.0-alpine

# create destination directory
RUN mkdir -p /usr/src/webapp
WORKDIR /usr/src/webapp

# update and install dependency
RUN apk update && apk upgrade
# RUN apk add git
RUN apk add --update git

# copy the app, note .dockerignore
COPY . /usr/src/webapp/
# RUN npm install
# RUN npm install sharp
# RUN npm install puppeteer
# RUN npm install convert-svg-to-png
# RUN npm install favicons
# RUN yarn add puppeteer
# RUN yarn add convert-svg-to-png
# RUN yarn add favicons
# RUN yarn install
RUN yarn add sharp@0.30.7 --ignore-engines

# RUN yarn add sharp --ignore-scripts=false --verbose sharp
# RUN yarn rebuild --verbose sharp
RUN yarn install --ignore-engines
# RUN npm install puppeteer
# RUN npm install convert-svg-to-png
# RUN npm install favicons --unsafe-perm

# build necessary, even if no static files are needed,nvm
# since it builds the server as well
RUN yarn build

# expose 5000 on container
EXPOSE 5000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=5000

# start the app
CMD [ "yarn", "start" ]