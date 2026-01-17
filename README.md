# 🎓 Student Portal Backend (NestJS)

A backend application built with NestJS to manage new student registration, fee payment, and academic results.
This system provides secure APIs for students and administrators to interact with academic and financial records.

## 📌 Features

### 👤 Authentication & Authorization
- JWT-based authentication
- Role-based access control (Admin, Student)
- Secure password hashing

### 📝 New Student Registration
- Online student application
- Registration approval workflow (Pending / Approved / Rejected)
- Auto student ID generation

### 💰 Fee Management & Payments
- Fee structure per course/semester
- Invoice generation
- Online payment integration (Stripe / Paystack / Flutterwave)
- Payment verification and receipts

### 📊 Results Management
- Admin uploads student results
- Semester-wise result viewing
- GPA/CGPA calculation
- Downloadable result slips

## 🏗️ Tech Stack

- **Framework**: NestJS (Node.js)
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Authentication**: JWT + Passport
- **Validation**: class-validator
- **API Docs**: Swagger
- **Payments**: Stripe / Paystack (via Webhooks)
- **Package Manager**: pnpm

## 📁 Project Structure
```
src/
├── auth/
├── users/
├── registration/
├── fees/
├── payments/
├── results/
├── common/
│   ├── guards/
│   ├── decorators/
│   └── enums/
├── database/
│   └── database.module.ts
├── app.module.ts
└── main.ts
```

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/tmothykhalayi/Survey-backend.git
cd Survey-backend
```

### 2️⃣ Install Dependencies
```bash
pnpm install
```

### 3️⃣ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=student_portal
DB_SYNC=true
DB_LOGGING=false
JWT_SECRET=your_jwt_secret
PAYMENT_SECRET=your_payment_secret
```

### 4️⃣ Run the Application

**Development mode:**
```bash
pnpm run start:dev
```

**Production mode:**
```bash
pnpm run build
pnpm run start:prod
```

Server will run on: **http://localhost:3000**

## 📝 Available Scripts

- `pnpm run start` - Start the application
- `pnpm run start:dev` - Start in watch mode
- `pnpm run start:debug` - Start in debug mode
- `pnpm run build` - Build the application
- `pnpm run format` - Format code with Prettier
- `pnpm run lint` - Lint and fix code
- `pnpm run test` - Run unit tests
- `pnpm run test:e2e` - Run end-to-end tests
- `pnpm run test:cov` - Run tests with coverage

## � API Endpoints (Sample)

### Authentication
```
POST /auth/login
POST /auth/register
```

### Registration
```
POST   /registrations
GET    /registrations/status
PATCH  /registrations/:id/approve
```

### Fees & Payments
```
GET  /fees/outstanding
POST /payments/initiate
POST /payments/verify
```

### Results
```
POST /results
GET  /results
GET  /results/semester/:id
```

## 🔐 Security
- JWT authentication
- Role-based guards
- Input validation
- Encrypted passwords
- Secure payment verification via webhooks

## 📚 API Documentation

Swagger documentation available at: **http://localhost:3000/api**

## 🧪 Testing
```bash
pnpm run test
```

## 🛠️ Future Enhancements
- Attendance management
- Parent portal
- Email/SMS notifications
- Admin dashboard
- Audit logs

## 👨‍💻 Author
tmothykhalayi  
Backend Developer (NestJS)

## 📄 License
This project is licensed under the MIT License.

📡 API Endpoints (Sample)
Authentication
POST /auth/login
POST /auth/register

Registration
POST   /registrations
GET    /registrations/status
PATCH  /registrations/:id/approve

Fees & Payments
GET  /fees/outstanding
POST /payments/initiate
POST /payments/verify

Results
POST /results
GET  /results
GET  /results/semester/:id

🔐 Security

JWT authentication

Role-based guards

Input validation

Encrypted passwords

Secure payment verification via webhooks

📘 API Documentation

Swagger documentation available at:

http://localhost:3000/api

🧪 Testing
npm run test

🛠️ Future Enhancements

Attendance management

Parent portal

Email/SMS notifications

Admin dashboard

Audit logs

👨‍💻 Author

Your Name
Backend Developer (NestJS)

📄 License

This project is licensed under the MIT License.