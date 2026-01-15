# Lightweight Node.js image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy application source
COPY . .

# Expose application port
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
