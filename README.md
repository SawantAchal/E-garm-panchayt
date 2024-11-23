# E-Gram Panchayat Portal #
The E-Gram Panchayat Portal is a comprehensive web application for managing various panchayat services. 
It allows users to register and apply for services, admin and staff to manage services and applications, and includes a secure authentication mechanism for different roles.

# Deploy Link #

  **Frontend** :https://e-garm-panchayt-frontend.onrender.com/
  
  **Staff Panel** : https://e-garm-panchayt-staff.onrender.com/
  
  **Admin Panel**: https://e-garm-panchayt-admin.onrender.com/


# Features #

  **User Portal**
    - User registration and login.
    
    -View all available services.
    
    -Apply for services by filling out a form.
    
    -View applied services and their status.
    
**Admin Panel**

    -Add, update, and remove services.
    
    -Add and manage staff accounts.
    
    -View all applications and update their status.
    
**Staff Panel**

    -View and manage service applications.
    
    -Update the status of applications.

# Tech Stack #

**Frontend** :

  - React: For building the user interface.
  
  - Tailwind CSS: For styling.
  
  - React Router: For routing.
  
  - React Toastify: For notifications.
  
**Backend** :

  - Node.js: Server-side runtime.

  - Express.js: Web framework.
    
  - MongoDB: Database.
    
  - Mongoose: ODM for MongoDB.
    
  - JWT: For authentication and authorization.
    
**Tools** :

  - Axios: For HTTP requests.
    
  - dotenv: For environment variable management.

# Setup Instructions #
**Prerequisites**

  - Node.js and npm installed.
    
  - MongoDB installed and running locally or accessible via a cloud provider.

**1. Clone the Repository**

  - git clone https://github.com/SawantAchal/E-garm-panchayt.git
    
  - cd e-gram-panchayat


**2. Install Dependencies**

   *For the backend:*
   
       - cd server
       
       - npm install
       
   *For the frontend:*
   
      -cd client
      
      -npm install

**3. Configure Environment Variables**

    -PORT=4000
    
    -MONGO_URI=your_mongo_connection_string
    
    -JWT_SECRET=your_jwt_secret
    
    -ADMIN_EMAIL=admin@example.com
    
    -ADMIN_PASSWORD=admin123

**4. Start the Application**

  *Backend:*
  
    - npm run server

  *Frontend:*
  
   - npm run dev


# How to Use #

  **User Portal**
  
    -Register and log in as a user.

    -View available services and apply for a service.

    -Check the status of your applications under "Profile".

**Admin Panel**

    -Log in using admin credentials (ADMIN_EMAIL and ADMIN_PASSWORD from .env).

    -Add or remove services and manage staff accounts.

    -View all applications and update their statuses.

**Staff Panel**

    -Log in with staff credentials provided by the admin.

    -View and update the status of applications.
# API Endpoints #
**User Routes**
    POST /api/user/register - Register a new user.
    
    POST /api/user/login - Log in a user.
    
    GET /api/user/profile - Fetch user profile.
    
**Service Routes**

    POST /api/service/addService - Add a new service (Admin only).
    
    GET /api/service/allServices - Fetch all services.
    
    POST /api/service/removeService - Remove a service (Admin only).
    
**Application Routes**

    POST /api/application/apply - Apply for a service (User only).
    
    GET /api/application/allApplication - Fetch all applications (Admin/Staff).
    
    POST /api/application/applicationStatus - Update application status (Admin/Staff).
    
**Staff Routes**

    POST /api/staff/add - Add staff (Admin only).
    
    GET /api/staff/allStaff - Fetch all staff (Admin only).
    
    POST /api/staff/remove - Remove staff (Admin only).
    
    POST /api/staff/staffLogin - Log in a staff member.
