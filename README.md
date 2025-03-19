# AWS EC2 Setup and Deployment Guide

This guide provides step-by-step instructions for setting up an EC2 instance, configuring the environment, and deploying your application using Docker.

## 1. t2.micro EC2 Instance Setup

### Create and Configure EC2 Instance
- Launch a new EC2 instance from the AWS Management Console
- Configure security groups:
    - Open HTTP (port 80) and HTTPS (port 443) to 0.0.0.0/0
    - *Optionally open tsp port 3000 for testing purposes*
    - *Restrict SSH access to your IP address for better security*
- Allocate and associate an Elastic IP to your instance
    - This ensures your public IP address remains consistent across instance restarts

> **Note:** If you encounter connection issues, verify that your IP hasn't changed in the security group settings

### Connect to Your Instance
```bash
ssh -i your-key.pem ubuntu@your-elastic-ip
```

## 2. Configure Swap Space

Setting up swap space helps ensure smooth operation with installed packages, especially on instances with limited RAM.

```bash
# Create a 1GB swap file
sudo fallocate -l 1G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Verify swap is enabled
sudo swapon --show
sudo free -h

# Make swap persistent across reboots
sudo echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### Removing Swap (if needed)
```bash
# Disable swap
sudo swapoff -a -v
sudo rm /swapfile

# Back up and clean fstab
sudo cp /etc/fstab /etc/fstab.bak
sudo sed -i '/\/swapfile/d' /etc/fstab
```

## 3. Install Docker and Docker Compose

```bash
# Update package listings
sudo apt-get update

# Install prerequisites
sudo apt-get install -y ca-certificates curl gnupg lsb-release

# Install Docker
sudo apt install docker.io

# Add your user to the docker group to run docker without sudo
sudo gpasswd -a $USER docker
sudo newgrp docker

# Verify Docker installation
docker -v

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.29.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/bin/docker-compose
sudo chmod +x /usr/bin/docker-compose

# Verify Docker Compose installation
docker-compose --version
```

## 4. Transfer Your Application to EC2

Use `rsync` to efficiently transfer your application files while excluding unnecessary directories:

```bash
rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' \
-e "ssh -i ~/.ssh/your-key.pem" \
. ubuntu@your-elastic-ip:~/
```

This command:
- Excludes `node_modules`, `.git`, and `.env` directories
- Uses your SSH key for authentication
- Copies everything from the current directory to the home directory of your EC2 instance

## 5. Deploy Your Application

Change `$domain$` in the nginx.conf to your domain 

```bash
cd ~/swapi

# Create .env file with your environment variables
nano .env

cd ..

# Pull required Docker images
docker-compose --env-file ./swapi/.env pull

# Build and start your containers
docker-compose --env-file ./swapi/.env up --build
```

## 6. Set up the automated renewal with crontab

```bash

#A crontab can be created on linux systems by running:
crontab -e

#And adding a line with the following structure:
0 5 1 */2 *  /usr/bin/docker compose -f /var/docker/docker-compose.yml --env-file ~/swapi/.env up certbot
```

### Setting up SSL with Nginx and Let's Encrypt

For more details to secure your application with HTTPS, follow the guide at:
https://www.programonaut.com/setup-ssl-with-docker-nginx-and-lets-encrypt/

## Troubleshooting

- **SSH Connection Issues**: Verify your IP address hasn't changed and is correctly configured in the security group
- **Docker Permission Denied**: Make sure your user is added to the docker group and you've started a new session
- **Application Not Accessible**: Check that the correct ports are open in your security group and that your application is properly configured to listen on the appropriate interfaces

## Conclusion

Your application should now be running securely on your t2.micro EC2 instance. The setup includes:
- A properly configured EC2 instance with Elastic IP
- Swap space for improved performance
- Docker and Docker Compose for containerization
- Secure file transfer process
- Running containers with environment variables
