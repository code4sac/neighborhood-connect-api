FROM node:10

WORKDIR /opt/neighborhood-connect/

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start:prod" ]
