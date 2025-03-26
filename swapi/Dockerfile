FROM node:23-alpine

WORKDIR ~/swapi-dir

COPY swapi .

RUN npm install

RUN npm install -g typescript @nestjs/cli

RUN tsc

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]