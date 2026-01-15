# Sample Node.js Website – ECS Deployment

This repository contains a **modernized sample Node.js website** designed to demonstrate **containerized application deployment on AWS ECS** using both **Fargate** and **EC2 launch types**, along with a **CI/CD pipeline using AWS CodePipeline**.

The project is lightweight, production-ready, and suitable for local testing as well as cloud deployment.

---

## 🚀 Application Overview

- Node.js application built with **Express.js**
- Static website with smooth **CSS animations and transitions**
- Health check endpoint for load balancers and ECS
- Dockerized using a **lightweight Alpine-based image**
- Designed for **AWS ECS + Application Load Balancer**

---

## 🧱 Tech Stack

- **Node.js (Express)**
- **HTML / CSS (Animations & Transitions)**
- **Docker**
- **Amazon ECS (Fargate & EC2)**
- **Amazon ECR**
- **AWS CodePipeline & CodeBuild**
- **Application Load Balancer**

---

## 📁 Project Structure

```text
.
├── app.js
├── package.json
├── Dockerfile
├── buildspec.yml
├── public/
│   ├── index.html
│   ├── another-page.html
│   └── styles.css
└── README.md
```

---

## ⚙️ Application Features

- **Landing Page** with modern UI and animations
- **Secondary Page** highlighting project features
- **Health Check Endpoint**: `/health`
- **Gzip Compression** for better performance
- **Request Logging** enabled
- **Graceful shutdown handling** for ECS

---

## ▶️ Run Locally

### Prerequisites
- Node.js 16+
- npm

### Steps
```bash
npm install
npm start
```

Access the app:
- http://localhost:8080
- http://localhost:8080/another-page.html
- http://localhost:8080/health

---

## 🐳 Run with Docker (Local Test)

```bash
docker build -t sample-node .
docker run -p 8080:8080 sample-node
```

---

## ☁️ AWS Deployment

### Supported Deployment Options

- **ECS Fargate** (Serverless)
- **ECS with EC2 instances**

### Container Image
- Stored in **Amazon ECR**
- Built and pushed automatically via CI/CD

### Load Balancing
- Application Load Balancer
- Health check path: `/health`

---

## 🔄 CI/CD Pipeline (AWS CodePipeline)

The pipeline performs the following steps:

1. Pulls source code from the repository
2. Builds Docker image using CodeBuild
3. Pushes image to Amazon ECR
4. Generates `imagedefinitions.json`
5. Deploys updated image to ECS service

This enables **automated, zero-downtime deployments**.

---

## 📌 Best Practices Implemented

- Lightweight Docker image using Alpine
- ECS-compatible port and health checks
- No hardcoded credentials
- AWS-native services only
- Production-ready structure

---

## 🧠 Use Cases

- Learning AWS ECS (Fargate & EC2)
- Practicing Docker + CI/CD pipelines
- Demo project for interviews
- Reference architecture for microservices

---

## 📄 License

This project is for learning and demonstration purposes.

---

## 🙌 Author

**Ritik Sahu**

---

If you have suggestions or want to extend this project (Blue/Green deployments, auto scaling, monitoring), feel free to build on top of it 🚀