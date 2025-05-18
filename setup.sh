sudo apt update
sudo apt install git -y


sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER



echo "Pulling the latest Nginx Docker image..."
docker pull nginx:latest

echo "Removing old nginx container if exists..."
docker rm -f mynginx 2>/dev/null || true


echo "Running Nginx container on port 8080..."
docker run -d --name mynginx -p 8080:80 nginx:latest

echo "Nginx is running at http://localhost:8080"

