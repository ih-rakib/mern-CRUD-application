# MERN CRUD Application

## Overview

The MERN CRUD Application is a full-stack web application designed to manage items using a CRUD (Create, Read, Update, Delete) interface. This application is built using the MERN stack, which includes MongoDB, Express, React, and Node.js. It features a user-friendly interface for managing item data and serves as a practical example of modern web development techniques.

## Features

- **Create Items**: Users can add new items to the list by providing a name, description, and price.
- **Read Items**: View a list of all items currently stored in the database.
- **Update Items**: Modify the details of existing items.
- **Delete Items**: Remove items from the list.

## Technology Stack

- **Frontend**:
  - **React**: A JavaScript library for building user interfaces.
  - **Vite**: A build tool that provides a fast development environment and optimized production builds.
  - **Tailwind CSS**: A utility-first CSS framework for styling components.

- **Backend**:
  - **Node.js**: A JavaScript runtime for building server-side applications.
  - **Express**: A web application framework for Node.js to handle routing and server logic.
  - **MongoDB**: A NoSQL database for storing and managing item data using Mongoose ODM.

## Project Structure

### Frontend

```plaintext
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ItemForm.jsx
│   │   ├── ItemList.jsx
│   │   └── UpdateItemForm.jsx
│   ├── pages/
│   │   └── Home.jsx
│   └── main.jsx
├── .env
├── package.json
└── vite.config.js

### Backend

backend/
├── config/
│   └── db.js
├── models/
│   └── itemModel.js
├── routes/
│   └── itemRoutes.js
├── .env
├── index.js
├── package.json
└── .gitignore

```

## Getting Started

### Prerequisites

- **Node.js:** Ensure you have Node.js installed (v18 or above).
- **MongoDB Atlas:** Set up a MongoDB Atlas account for cloud-based database management.

### Installation

#### Clone the Repository

```bash
git clone https://github.com/your-username/mern-CRUD-application.git
cd mern-CRUD-application
```

Set Up the Backend
Navigate to the backend directory:

```bash
cd backend
```

### Install dependencies:

```bash
npm install
```

### Create a .env file in the backend directory and add your MongoDB connection string:

.env
```bash
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mern-crud?retryWrites=true&w=majority
PORT=5000
```

### Start the backend server:

```bash
npm run dev
```


## Set Up the Frontend
Navigate to the frontend directory:

```bash
cd ../client
```

### Install dependencies:

```bash
npm install
```

### Start the development server:

```bash
npm run dev
```

The frontend should be available at http://localhost:5173.


- <small>*made with love by orion ':)*</small>

