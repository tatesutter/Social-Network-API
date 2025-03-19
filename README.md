# 🏛 Social Network API

## 📌 Description
This is a **social network API** built with **Node.js, Express.js, and MongoDB** that allows users to:
- Create and manage accounts.
- Post thoughts.
- React to friends' thoughts.
- Manage a friends list.

This API follows **RESTful principles** and uses **Mongoose ODM** for database interactions.

---

## 🚀 Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **Nodemon** (for development)
- **Dotenv** (for environment variables)

---

## 🛠 Installation

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/social-network-api.git
cd social-network-api
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a **.env** file and add:

```plaintext
MONGODB_URI=mongodb://127.0.0.1:27017/socialNetworkDB
```

### **4️⃣ Start the Server**
For standard use:
```sh
npm start
```
For development (auto-restart on changes):
```sh
npx nodemon server.js
```

---

## 📌 API Endpoints

### **Users (`/api/users`)**
| Method | Endpoint | Description |
|--------|---------|-------------|
| **GET** | `/api/users` | Get all users |
| **GET** | `/api/users/:id` | Get a single user by ID |
| **POST** | `/api/users` | Create a new user |
| **PUT** | `/api/users/:id` | Update a user by ID |
| **DELETE** | `/api/users/:id` | Delete a user by ID |
| **POST** | `/api/users/:userId/friends/:friendId` | Add a friend |
| **DELETE** | `/api/users/:userId/friends/:friendId` | Remove a friend |

**Example Create User Request (POST)**
```json
{
    "username": "testUser",
    "email": "testuser@example.com"
}
```

---

### **Thoughts (`/api/thoughts`)**
| Method | Endpoint | Description |
|--------|---------|-------------|
| **GET** | `/api/thoughts` | Get all thoughts |
| **GET** | `/api/thoughts/:id` | Get a single thought by ID |
| **POST** | `/api/thoughts` | Create a new thought |
| **PUT** | `/api/thoughts/:id` | Update a thought |
| **DELETE** | `/api/thoughts/:id` | Delete a thought |

**Example Create Thought Request (POST)**
```json
{
    "thoughtText": "This is a test thought!",
    "username": "testUser",
    "userId": "PLACE_USER_ID_HERE"
}
```

---

### **Reactions (`/api/thoughts/:thoughtId/reactions`)**
| Method | Endpoint | Description |
|--------|---------|-------------|
| **POST** | `/api/thoughts/:thoughtId/reactions` | Add a reaction |
| **DELETE** | `/api/thoughts/:thoughtId/reactions/:reactionId` | Remove a reaction |

**Example Add Reaction Request (POST)**
```json
{
    "reactionBody": "Nice thought!",
    "username": "testUser"
}
```

---

## 🧪 Testing in Insomnia
1. **Start the server** (`npm start`).
2. Open **Insomnia**.
3. Create **GET, POST, PUT, and DELETE** requests as needed.
4. Use `http://localhost:3001/...` as the base URL.

---

## 🔗 Future Improvements
- ✅ Implement authentication (JWT).
- ✅ Add pagination for large data queries.
- ✅ Optimize database queries for performance.

---

## 📜 License
This project is **open-source** and free to use under the **MIT License**.

---

## 💡 Need Help?
Feel free to reach out or submit an issue! 🚀
