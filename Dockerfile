FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy source code
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start dev server
CMD ["yarn", "run", "dev"]
