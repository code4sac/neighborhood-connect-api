FROM node:10

WORKDIR /opt/neighborhood-connect-api/

COPY package*.json /opt/neighborhood-connect-api/
RUN npm install

COPY . /opt/neighborhood-connect-api/

EXPOSE 8080

CMD [ "npm", "start:prod" ]
