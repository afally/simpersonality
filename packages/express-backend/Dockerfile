FROM node:16
#Create app directory
WORKDIR /app

#Install app dependencies
#A wildcard is used to ensure both package.json and package-lock.json are copied 
#where available (npm@5+)

COPY package.json ./
RUN npm install

#Bundle app source
COPY . .

RUN ls -a
EXPOSE 3001
ENTRYPOINT ["node", "server.js"]