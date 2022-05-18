FROM node:16.13.2-alpine3.15
WORKDIR /chat_js
COPY . .
RUN npm install --production
CMD ["node", "/chat_js/index.js"]