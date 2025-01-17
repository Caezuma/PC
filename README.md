# Rooms Management API

## Overview
The Rooms Management API is a RESTful service for managing hotel rooms and bookings. This API allows users to perform CRUD operations on rooms and bookings, ensuring efficient and structured data handling.


## Features
- Retrieve a list of rooms.
- Create, update, and delete room information.
- Manage bookings including creating and listing bookings.
- Validate data with clear error handling.


## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express.js**: Framework for building APIs.
- **Swagger (OpenAPI)**: API documentation.


## Installation

1. Clone the repository:
   ```bash
   git clone https://gitlab.com/jala-university1/cohort-1/oficial-pt-programa-o-5-cspr-351.ga.t1.25.m1/se-o-b/grupo-4/backend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm start
   ```

   The server will run at `http://localhost:3000` by default.

## Endpoints

### Rooms
| Method | Endpoint         | Description                      |
|--------|------------------|----------------------------------|
| GET    | `/rooms`         | Retrieve all rooms.             |
| POST   | `/rooms`         | Create a new room.              |
| PUT    | `/rooms/{id}`    | Update an existing room by ID.  |
| DELETE | `/rooms/{id}`    | Delete a room by ID.            |

### Bookings
| Method | Endpoint         | Description                      |
|--------|------------------|----------------------------------|
| GET    | `/bookings`      | Retrieve all bookings.          |
| POST   | `/bookings`      | Create a new booking.           |


## API Documentation
Interactive API documentation is available at:
```
http://localhost:3000/api-docs
```
This documentation is powered by Swagger UI and provides details on available endpoints, request/response structures, and more.


## Data Models

You can check it out here: 
- [Data Model Documentation](./data-model.md)

