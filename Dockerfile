FROM node:22.13.1-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install 

COPY . ./

EXPOSE 8000

CMD ["npm","run","dev"]
