# Stage 1: Build stage using Node.js
FROM node:20 AS builder

# Create and set the working directory
WORKDIR /app

# Install Node.js
#RUN apt-get update && apt-get install -y nodejs

# Copy package.json and package-lock.json to the working directory
COPY ./package*.json .

# Install Node.js dependencies
RUN npm install

# Switch back to the main working directory
#WORKDIR /app

# Copy the entire project to the working directory
COPY . .

# Copy the existing build folder from client to the working directory
#COPY ./client/build /app/client/build

# Expose the ports for Node.js
EXPOSE 3000

# Command to run the server
CMD ["node", "index.js"]

# Stage 2: MongoDB stage
#FROM mongo:latest

# Expose the default MongoDB port
#EXPOSE 27017

# Set environment variables for MongoDB
#ENV MONGO_INITDB_ROOT_USERNAME=root
#ENV MONGO_INITDB_ROOT_PASSWORD=root

# Create a directory for MongoDB data
#VOLUME ["/data/db"]
