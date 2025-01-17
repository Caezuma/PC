# Data Model Design

## Overview
This document outlines the initial design for the data model used in the Rooms Management API. It includes entities, attributes, and relationships between them.

---

## Entities and Attributes

### 1. **Room**
Represents a room in the hotel.

| Attribute       | Type       | Constraints                     | Description                                    |
|-----------------|------------|---------------------------------|------------------------------------------------|
| `id`           | Integer    | Primary Key, Auto-increment     | Unique identifier for the room.               |
| `type`         | String     | Required                        | Type of room (e.g., Single, Double, Suite).   |
| `pricePerNight`| Decimal    | Required, > 0                   | Price per night for the room.                 |
| `maxOccupancy` | Integer    | Required, > 0                   | Maximum number of occupants allowed.          |

---

### 2. **Booking**
Represents a booking made by a customer.

| Attribute       | Type       | Constraints                     | Description                                    |
|-----------------|------------|---------------------------------|------------------------------------------------|
| `id`           | Integer    | Primary Key, Auto-increment     | Unique identifier for the booking.            |
| `roomId`       | Integer    | Foreign Key (Room.id), Required | ID of the room being booked.                  |
| `customerName` | String     | Required                        | Name of the customer making the booking.      |
| `startDate`    | Date       | Required                        | Start date of the booking.                    |
| `endDate`      | Date       | Required, > `startDate`         | End date of the booking.                      |
| `totalPrice`   | Decimal    | Calculated, > 0                 | Total price for the booking.                  |

---

## Relationships

- **Room ↔ Booking**:
  - One-to-Many: A single room can have multiple bookings, but each booking belongs to one room.

---

## Constraints and Validations

### Room:
- `pricePerNight` must be a positive value.
- `maxOccupancy` must be a positive integer.

### Booking:
- `startDate` must precede `endDate`.
- `totalPrice` is calculated as `(pricePerNight × number of nights)`.
- `roomId` must reference a valid `Room`.

---

## Example Data

### Rooms:
```json
[
  {
    "id": 1,
    "type": "Single",
    "pricePerNight": 50.00,
    "maxOccupancy": 1
  },
  {
    "id": 2,
    "type": "Double",
    "pricePerNight": 75.00,
    "maxOccupancy": 2
  }
]
```

### Bookings:
```json
[
  {
    "id": 1,
    "roomId": 1,
    "customerName": "John Doe",
    "startDate": "2025-01-01",
    "endDate": "2025-01-05",
    "totalPrice": 200.00
  },
  {
    "id": 2,
    "roomId": 2,
    "customerName": "Jane Smith",
    "startDate": "2025-01-03",
    "endDate": "2025-01-06",
    "totalPrice": 225.00
  }
]
