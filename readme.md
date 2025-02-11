# Backend Service for Full Stack App

## Overview
This is the backend service for a mini full-stack project. The backend is built with TypeScript and Node.js using Express and is responsible for handling API requests and sending messages to the frontend. The primary goal of this project is to deploy the application using Kubernetes on AWS.

## Features
- Express.js server with TypeScript
- REST API for communication with the frontend
- Health check endpoint
- CORS support
- Dockerized for containerization
- Kubernetes deployment setup
- AWS deployment using Kubernetes

## Technologies Used
- Node.js
- TypeScript
- Express.js
- Docker
- Kubernetes
- AWS

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Kubernetes (kubectl)](https://kubernetes.io/docs/tasks/tools/)
- [AWS CLI](https://aws.amazon.com/cli/)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ariel93/ay-server.git
   cd ay-server
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file with the following:
   ```env
   PORT=4000
   ```

4. Start the server:
   ```sh
   npm run dev
   ```

5. The backend should be running at `http://localhost:4000`.

### API Endpoints
- **Health Check**: `GET /api/health`
  - Response: `{ "status": "API is running!" }`

## Docker Setup
To run the backend in a Docker container:
```sh
# Build the Docker image
docker build -t ay-server .

# Run the container
docker run -p 4000:4000 ay-server
```

## Kubernetes Deployment
1. Apply Kubernetes deployment:
   ```sh
   kubectl apply -f k8s-deployment.yaml
   ```
2. Verify the pods:
   ```sh
   kubectl get pods
   ```
3. Expose the service:
   ```sh
   kubectl expose deployment ay-server --type=LoadBalancer --port=4000
   ```

## Deploying to AWS
1. Ensure AWS CLI is configured:
   ```sh
   aws configure
   ```
2. Deploy Kubernetes cluster using EKS (Elastic Kubernetes Service)
   ```sh
   eksctl create cluster --name my-cluster --region us-east-1
   ```
3. Deploy the backend service to AWS EKS
   ```sh
   kubectl apply -f k8s-deployment.yaml
   ```

## Contributing
Feel free to fork the repository and submit pull requests!

## License
This project is licensed under the MIT License.

