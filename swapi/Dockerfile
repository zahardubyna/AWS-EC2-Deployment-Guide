FROM node:23-alpine

WORKDIR ~/4-backend

COPY . .

RUN npm install --force

RUN npm install --force -g typescript @nestjs/cli

RUN tsc

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]