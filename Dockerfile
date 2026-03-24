FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
# Ini yang diubah:
CMD ["node", "src/app.js"]
