#!/bin/bash

sudo apt-get update -y # Update apt-get cache
sudo apt-get install -y neofetch # Install curl

# Install Dependencies
yarn install --force && yarn build # Install & build dependencies

# Setup Docker Containers
docker-compose up -d # Start Docker Containers in detached mode mention  in docker-compose.yml