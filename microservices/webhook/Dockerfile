# Step 1: Pulls a simple ubuntu image with node 8 installed in it
FROM node:8
ENV PORT 8080

# Step 2: Install dependent software packages using apt-get
RUN apt-get update && apt-get install -y build-essential python

# Step 3: Make a new directory called "app"
RUN mkdir /app

# Step 4: Copy the package.json file from your local directory and paste it inside the container, inside the app directory
COPY app/package.json /app/package.json

# Step 5: cd into the app directory and run npm install to install application dependencies
RUN cd /app && npm install

# Step 6: Add all source code into the app directory from your local app directory
ADD app /app/

# Step 7: cd into the app directory and execute the npm run start command
RUN cd /app && npm run start

# Step 8: Set app as our current work directory
WORKDIR /app
