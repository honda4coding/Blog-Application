# 🚀 Blog System API 

Backend API for a comprehensive blogging platform with Group management and RBAC (Role-Based Access Control).

## 🛠️ Project Structure & Tech Stack
- **Node.js & Express.js**
- **MongoDB & Mongoose**
- **ImageKit** (for image hosting)
- **JWT** (for authentication)
- **Vercel** (for deployment)

---

## 🔐 API Endpoints Reference

### 1️⃣ Authentication (`/api/auth`)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| POST | `/register` | Create a new account | Public |
| POST | `/login` | Login and get JWT token | Public |

### 2️⃣ Groups (`/api/groups`)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| POST | `/` | Create a new group | User |
| GET | `/` | Get all available groups | User |
| GET | `/:id` | Get single group details | Member |
| POST | `/:id/join` | Join a specific group | User |
| DELETE | `/:id/leave` | Leave a group | Member |

### 3️⃣ Posts (`/api/posts`)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| POST | `/` | Create a post (Text/Images) | Group Member |
| GET | `/` | Get newsfeed (Joined groups) | User |
| GET | `/:id` | Get specific post | User |
| PATCH | `/:id` | Update your own post | Post Owner |
| DELETE | `/:id` | Delete your own post | Post Owner |

### 4️⃣ Admin Actions (`/api/admin`)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| DELETE | `/groups/:groupId/users/:userId` | Kick user from group | Group Admin |
| PATCH | `/groups/:groupId/permissions` | Modify member permissions | Group Admin |
| DELETE | `/posts/:id` | Delete any post (Moderation) | Admin/SuperAdmin |

### 5️⃣ Users (`/api/users`)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| GET | `/me` | Get current user profile | Authenticated |
| PATCH | `/update-me` | Update profile info | Authenticated |

---

Create a .env file and add:

PORT=3000  ==> your empty port
DATABASE_URL=mongodb+srv://...
JWT_SECRET=your_secret_key
IMAGEKIT_PUBLIC_KEY=...
IMAGEKIT_PRIVATE_KEY=...
IMAGEKIT_URL_ENDPOINT=...

---

npm start        # Production
npm run dev      # Development with Nodemon

---

### Folder Architecture (MVC)

controllers/: Request handling & Logic.

models/: Mongoose schemas.

routes/: API route definitions.

middlewares/: Auth & Error handling.

utils/: Reusable helpers (AppError, ImageKit).

validators/: Joi schemas for data validation.