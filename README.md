# 🚀 Blog System API (Backend)

Welcome to the **Blog System API**! A robust backend solution built with the MERN stack, featuring Group Management, Role-Based Access Control (RBAC), and secure image hosting.

---

## 🛠️ Tech Stack
- **Node.js & Express.js**: Server-side logic.
- **MongoDB & Mongoose**: Database & Schema modeling.
- **ImageKit**: Cloud-based image hosting and optimization.
- **JWT (JSON Web Tokens)**: Secure authentication and authorization.
- **Vercel**: Production deployment.

---

## 🔐 API Documentation & Endpoints

> **Note:** All protected routes require a Bearer Token in the headers:  
> `Authorization: Bearer <your_jwt_token>`

### 1️⃣ Authentication (`/api/auth`)
| Method | Endpoint | Body (JSON) | Description |
| :--- | :--- | :--- | :--- |
| POST | `/register` | `name`, `email`, `password`, `passwordConfirm` | Create a new account |
| POST | `/login` | `email`, `password` | Get JWT token |

### 2️⃣ Groups (`/api/groups`)
| Method | Endpoint | Body (JSON) | Description |
| :--- | :--- | :--- | :--- |
| POST | `/` | `name`, `description` | Create a new group (Owner) |
| GET | `/` | None | Get all groups |
| POST | `/:id/join` | None | Join a specific group |
| DELETE | `/:id/leave`| None | Leave a group |

### 3️⃣ Posts (`/api/posts`)
| Method | Endpoint | Body (JSON) | Description |
| :--- | :--- | :--- | :--- |
| POST | `/` | `title`, `content`, `image`, `group` | Create post (Multipart or Base64) |
| GET | `/` | None | Newsfeed (Posts from joined groups) |
| PATCH | `/:id` | `title` or `content` | Update your own post |
| DELETE | `/:id` | None | Delete post (Owner or Admin) |

### 4️⃣ Admin Actions (`/api/admin`)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| DELETE | `/groups/:groupId/users/:userId` | Kick user from group | Group Admin |
| DELETE | `/posts/:id` | Moderation: Delete any post | Admin/SuperAdmin |

---

## 📁 Folder Architecture (MVC)
- `controllers/`: Logic for handling requests and responses.
- `models/`: Mongoose schemas and data structures.
- `routes/`: Routing configuration for each module.
- `middlewares/`: Authentication, Authorization, and Global Error Handling.
- `utils/`: Helpers (e.g., ImageKit setup, AppError class).
- `validators/`: Joi/Zod schemas for input validation.

---

## ⚙️ Environment Variables
Create a `.env` file in the root directory:
```env
PORT=3000
DATABASE_URL=your_mongodb_atlas_url
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=90d

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_endpoint_url
