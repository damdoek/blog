FROM node:12 
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . ./
# RUN  npm config set proxy <proxy config>
# RUN  npm config set https-proxy <proxy config>
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source

RUN npm run build:ssr
EXPOSE 4000
CMD [ "npm", "run", "start" ]
