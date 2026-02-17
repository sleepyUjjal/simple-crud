# TaskHub -- Secure Task Management API

TaskHub is a scalable REST API built using Django REST Framework with
JWT authentication, role-based access control, and a clean vanilla
JavaScript frontend.

------------------------------------------------------------------------

## 🚀 Features

-   JWT Authentication (Access + Refresh Tokens)
-   User Registration & Login
-   Role-Based Access Control (USER / ADMIN)
-   CRUD Operations for Tasks
-   API Versioning (`/api/v1/`)
-   Swagger API Documentation
-   Postman Collection Included
-   SQLite (Development) + MySQL Ready Configuration
-   Clean Black & White Frontend UI

------------------------------------------------------------------------

## 🛠 Tech Stack

### Backend

-   Django
-   Django REST Framework
-   SimpleJWT
-   SQLite (default)
-   MySQL (production-ready configuration)
-   drf-yasg (Swagger)
-   django-cors-headers

### Frontend

-   HTML
-   CSS (Minimal Monochrome Design)
-   Vanilla JavaScript (Fetch API)

------------------------------------------------------------------------

## 📂 Project Structure

    taskhub/
     ├── backend/
     │    ├── core/
     │    ├── accounts/
     │    ├── tasks/
     │    └── manage.py
     │
     ├── frontend/
     │    ├── index.html
     │    ├── register.html
     │    ├── dashboard.html
     │    ├── css/
     │    └── js/
     │
     ├── TaskHub.postman_collection.json
     └── README.md

------------------------------------------------------------------------

## ⚙️ Backend Setup

### 1️⃣ Clone Repository

``` bash
git clone <https://github.com/sleepyUjjal/simple-crud.git>
cd taskhub/backend
```

### 2️⃣ Create Virtual Environment

``` bash
python -m venv env
source env/bin/activate
```

### 3️⃣ Install Dependencies

``` bash
pip install -r requirements.txt
```

------------------------------------------------------------------------

## 🗄 Database Configuration

### Default (SQLite)

No additional setup required.

### Optional MySQL Setup

Create database:

``` sql
CREATE DATABASE taskhub;
```

Create `.env` file:

    DB_ENGINE=mysql
    DB_NAME=taskhub
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_HOST=127.0.0.1
    DB_PORT=3306

------------------------------------------------------------------------

## ▶️ Run Server

``` bash
python manage.py migrate
python manage.py runserver
```

Backend URL:

    http://127.0.0.1:8000

Swagger Documentation:

    http://127.0.0.1:8000/swagger/

------------------------------------------------------------------------

## 🌐 Frontend Setup

Open new terminal:

``` bash
cd frontend
python -m http.server 5500
```

Open:

    http://localhost:5500

------------------------------------------------------------------------

## 🔐 Authentication Flow

1.  Register a user
2.  Login to receive JWT access token
3.  Add header to protected endpoints:


```
    Authorization: Bearer <access_token>
```
------------------------------------------------------------------------

## 📡 API Endpoints

### Authentication

    POST /api/v1/auth/register/
    POST /api/v1/auth/login/
    POST /api/v1/auth/refresh/

### Tasks

    GET    /api/v1/tasks/
    POST   /api/v1/tasks/
    PUT    /api/v1/tasks/{id}/
    DELETE /api/v1/tasks/{id}/

------------------------------------------------------------------------

## 🔒 Role-Based Access

**USER** - Can create tasks - Can view & modify own tasks only

**ADMIN** - Can view all tasks - Can delete any task

------------------------------------------------------------------------

## 🧠 Scalability Considerations

-   Stateless JWT authentication allows horizontal scaling
-   Modular app separation (accounts, tasks) enables microservice
    extraction
-   API versioning ensures backward compatibility
-   Indexed fields (`created_by`, `status`) improve query performance
-   Easily deployable behind load balancer (NGINX)
-   Can integrate Redis caching for frequently accessed data

------------------------------------------------------------------------

## 📦 Deliverables

-   Backend with JWT authentication
-   Role-based authorization
-   Working CRUD APIs
-   Basic frontend integration
-   Swagger documentation
-   Postman collection
-   Scalable project structure

------------------------------------------------------------------------

## 👨‍💻 Author

Ujjaldeep Singh\
Backend Developer Internship Assignment
