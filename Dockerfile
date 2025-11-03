# Use Node.js LTS
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other files (index.js, routes, etc.)
COPY . .

# Expose port 4000
EXPOSE 4000

# Start server
CMD ["node", "index.js"]
