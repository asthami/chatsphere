FROM node:alpine
# Update npm to the latest patch version
RUN npm install -g npm@10.2.4
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm","start"]