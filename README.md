

Flight Search Service 

This repository is part of a **Flight Booking System** built using the microservices architecture. It handles all **flight-related CRUD operations**, including adding, searching, updating, and deleting flight data.

**Repository:** [Flight Search Service](https://github.com/Assis-Mohanty/FandS)

---

## 🧩 Part of a Microservice Ecosystem

This service is one of **five** microservices that together form a complete flight booking backend.

| Service          | Description                                        | Repository                                                                       |
| ---------------- | -------------------------------------------------- | -------------------------------------------------------------------------------- |
| 🔍 Flight Search | Handles flight data CRUD and search logic          | [FandS](https://github.com/Assis-Mohanty/FandS)                                  |
| 🛒 Booking       | Manages booking and ticket logic                   | [Flight\_bookingService](https://github.com/Assis-Mohanty/Flight_bookingService) |
| ⏰ Reminder       | Sends notifications/reminders for upcoming flights | [FremainderServiceS](https://github.com/Assis-Mohanty/FremainderServiceS)        |
| 🔐 Auth          | User authentication and JWT handling               | [FauthS](https://github.com/Assis-Mohanty/FauthS)                                |
| 🌐 API Gateway   | Centralized entrypoint, request routing            | [ApiGateway](https://github.com/Assis-Mohanty/ApiGateway)                        |

---

## ⚙️ Tech Stack

This service uses the following backend stack:

* **Node.js + Express**: Server framework
* **Sequelize + MySQL**: ORM and database
* **dotenv**: Environment management
* **body-parser**: Request parsing
* **nodemon**: Development auto-reload

> `type: commonjs` setup for compatibility with existing modules.

### `package.json`

```json
{
  "name": "flightsandsearch",
  "version": "1.0.0",
  "description": "microService for handling flight crud",
  "license": "ISC",
  "type": "commonjs",
  "main": "index.js",
  "scripts": {
    "start": "npx nodemon src/index"
  },
  "dependencies": {
    "body-parser": "^1.20.3",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "mysql": "^2.18.1",
    "mysql2": "^3.12.0",
    "nodemon": "^3.1.9",
    "sequelize": "^6.37.5",
    "sequelize-cli": "^6.6.2"
  }
}
```

---

## 🧠 Core Responsibilities

* 🛬 **Add New Flights**
* 🛫 **Search Flights by Location, Date, Airline**
* ✏️ **Update Flight Information**
* ❌ **Delete Flights**

Each operation interacts directly with a **MySQL database** using Sequelize ORM.

---

## 📁 Folder Structure

```
FandS/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── index.js
├── config/
│   └── config.json
├── .env
└── package.json
```

---

## 🚀 How to Run

```bash
git clone https://github.com/Assis-Mohanty/FandS
cd FandS
npm install
cp .env.example .env  # setup your DB credentials
npm start
```

---

## 🔐 Environment Variables

You need to define the following in your `.env`:

```bash
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
PORT=
```

---

## 🛣️ Integration Flow

* All requests come through the **API Gateway**.
* The gateway routes `/flights` requests to this service.
* This service responds with the filtered or modified flight data.

---

## 📌 Notes

* Keep your `.env` secure.
* Use **Sequelize CLI** to manage migrations and models.
* Every service communicates via REST (HTTP), or message queues (if integrated).

---

## 🧪 TODOs / Improvements

* Add input validation
* Implement caching for frequent flight searches
* Add pagination + sorting to search results

---

## 👤 Author

Maintained by [Assis Mohanty](https://github.com/Assis-Mohanty)

---

