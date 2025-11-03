# **Legal Document Search Portal - Backend**

## **Project Overview**

This backend shows a Legal Document Search API. It is **fully mock-based** with pre-defined legal documents. It provides endpoints for searching and summarizing legal documents without connecting to a database.

---

## **Tech Stack**

- Node.js
- Express.js
- CORS

---

## **Project Structure**

```
backend/
├── index.js
├── routes/
│   └── generate.js
├── package.json
└── package-lock.json
```

---

## **Setup Instructions**

### 1️⃣ Clone the repository

```bash
git clone https://github.com/shadeshsaha/Legal-Document-Search-Portal-Backend.git
cd Legal-Document-Search-Portal/backend
```

### 2️⃣ Install dependencies

```bash
npm install express cors
```

### 3️⃣ Optional: Install nodemon for development

```bash
npm install -g nodemon
```

### 4️⃣ Start the server

- Production:

```bash
node index.js
```

- Development (auto-restart):

```bash
nodemon index.js
```

### 5️⃣ Default Server Port

```
http://localhost:4000
```

---

## **API Endpoints**

### **GET /api/generate?query=<your_query>**

- **Description:** Returns a mock document and summary based on query.
- **Response Example:**

```json
{
  "document": {
    "title": "Freedom of Speech",
    "content": "Freedom of Speech",
    "_id": "69086b783291ee925ae8c692",
    "createdAt": "2025-11-03T08:44:40.436Z",
    "updatedAt": "2025-11-03T08:44:40.436Z",
    "__v": 0
  },
  "summary": "No query provided."
}
```

---

## **Environment Variables**

Currently, the backend does **not require environment variables** as it’s fully mock-based.

> **Advanced tip:** If in the future you switch to a real database or external API, you can create a `.env` file:

```
PORT=4000
MONGO_URI=<your-mongodb-uri>
```

And access it via:

```js
import dotenv from "dotenv";
dotenv.config();
```

---

## **Advanced Tips & Troubleshooting**

1. **CORS Issues**: Ensure the frontend is running on a different port and `cors()` is enabled in `index.js`.
2. **Port Conflicts**: If port 4000 is used, update `index.js`:

```js
const PORT = process.env.PORT || 4000;
```

3. **Node Version**: Use Node.js v18+ for ES Module support (`import/export`).
4. **Common Error**: `ERR_MODULE_NOT_FOUND` — Check file paths in `import` statements. Use relative paths, e.g., `./routes/generate.js`.
5. **Adding More Mock Docs**: Update `routes/generate.js` with additional objects in `mockDocuments` array.
