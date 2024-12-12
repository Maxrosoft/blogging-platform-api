# Blogging Platform API

https://roadmap.sh/projects/blogging-platform-api

A simple RESTful API for managing a personal blogging platform, built with **Node.js**, **Express**, and **Mongoose**. This API allows users to perform CRUD operations on blog posts, with features such as filtering posts by a search term.

## Features

- Create a new blog post
- Update an existing blog post
- Delete a blog post
- Retrieve a single blog post
- Retrieve all blog posts
- Filter blog posts by a search term (title, content, category, or tags)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blogging-platform-api.git
   cd blogging-platform-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your `.env` file:
   ```env
   MONGO_URI=your_mongo_database_uri
   PORT=3000
   ```

4. Start the development server:
   ```bash
   npm start
   ```

---

## Endpoints

### Blog Posts

| Method | Endpoint           | Description                         |
|--------|--------------------|-------------------------------------|
| POST   | `/posts`           | Create a new blog post              |
| PUT    | `/posts/:id`       | Update an existing blog post        |
| DELETE | `/posts/:id`       | Delete a blog post                  |
| GET    | `/posts/:id`       | Retrieve a single blog post         |
| GET    | `/posts`           | Retrieve all blog posts             |
| GET    | `/posts?term=term` | Filter blog posts by a search term  |

## Technologies Used

- **Node.js**
- **Express**
- **MongoDB** with **Mongoose**
- **TypeScript** for type safety

---

Feel free to tweak this to match your preferences! 🚀