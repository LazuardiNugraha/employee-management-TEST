# using node LTS
FROM node:18-alpine

# working directory in container
WORKDIR /app

# copy package.json
COPY package*.json ./

# install dependency
RUN npm install

# copy source code
COPY . .

# expose port
EXPOSE 3001

# run the app
CMD ["npm", "run", "dev"]