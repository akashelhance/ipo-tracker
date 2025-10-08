# Use Node.js 18 lightweight image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy only package files first (for caching dependencies)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000 (Next.js default)
EXPOSE 3000

# Run the app in production mode
CMD ["npm", "start"]
