# Use a base image with Node.js and npm pre-installed
FROM node:20

# Set the working directory
WORKDIR /usr/

# Copy package.json and package-lock.json to the container
# COPY ./package*.json ./

RUN npm install -g npm@latest && \
    npx create-react-app frontend

RUN cd frontend &&\
    npm install

WORKDIR /usr/frontend
RUN npm run build

# WORKDIR /usr/app

# # Copy the rest of the application files
# COPY ./frontend/src/ ./src
# COPY ./frontend/public/ ./public
# COPY . ./

# Build the application
# RUN npm run build

# Copy SSL certificat to the container
# COPY ./ssl/mycert.crt ./
# COPY ./ssl/mycert.key ./

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]
