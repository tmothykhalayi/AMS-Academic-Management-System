# 🎓 AMS – Academic Management System

**Academic Management System (AMS)** is a comprehensive web-based platform that streamlines academic and administrative processes in universities and colleges.

The system enables secure student registration, fee management, online payments, result processing, and role-based access for administrators and students. AMS is built with a modern full-stack architecture, providing a scalable backend API and a responsive frontend interface for efficient academic operations.

## 🎯 What AMS Manages

- **👤 Student accounts & authentication** - Secure user registration and login system
- **📝 Student registration & approval workflow** - Streamlined application and verification process
- **💰 Fee structure, invoices & payments** - Comprehensive financial management
- **💳 Online payment verification** - Integrated payment gateway processing
- **📊 Academic results & GPA/CGPA** - Automated grade calculation and management
- **🛡️ Role-based access (Admin / Student)** - Granular permission control
- **📈 Administrative dashboards & reports** - Real-time analytics and insights

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

---

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

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run start` | Start the application |
| `pnpm run start:dev` | Start in watch mode (development) |
| `pnpm run start:debug` | Start in debug mode |
| `pnpm run build` | Build the application for production |
| `pnpm run format` | Format code with Prettier |
| `pnpm run lint` | Lint and fix code with ESLint |
| `pnpm run test` | Run unit tests |
| `pnpm run test:e2e` | Run end-to-end tests |
| `pnpm run test:cov` | Run tests with coverage report |

## 📡 API Endpoints (Sample)

### 🔐 Authentication
```http
POST   /auth/register      # Register new user
POST   /auth/login         # User login
POST   /auth/logout        # User logout
GET    /auth/profile       # Get user profile
```

### 👤 User Management
```http
GET    /users              # Get all users (Admin)
GET    /users/:id          # Get user by ID
PATCH  /users/:id          # Update user
DELETE /users/:id          # Delete user (Admin)
```

### 📝 Student Registration
```http
POST   /registrations              # Submit registration
GET    /registrations              # Get all registrations (Admin)
GET    /registrations/:id          # Get registration by ID
GET    /registrations/status       # Check registration status
PATCH  /registrations/:id/approve  # Approve registration (Admin)
PATCH  /registrations/:id/reject   # Reject registration (Admin)
```

### 💰 Fees Management
```http
GET    /fees                  # Get all fee structures (Admin)
POST   /fees                  # Create fee structure (Admin)
GET    /fees/:id              # Get fee by ID
PATCH  /fees/:id              # Update fee (Admin)
DELETE /fees/:id              # Delete fee (Admin)
GET    /fees/outstanding      # Get outstanding fees (Student)
```

### 💳 Payments
```http
GET    /payments              # Get all payments
POST   /payments/initiate     # Initiate payment
POST   /payments/verify       # Verify payment
GET    /payments/:id          # Get payment by ID
GET    /payments/receipt/:id  # Download receipt
```

### 📊 Results
```http
POST   /results                 # Upload results (Admin)
GET    /results                 # Get all results
GET    /results/:id             # Get result by ID
GET    /results/student/:id     # Get student results
GET    /results/semester/:id    # Get results by semester
PATCH  /results/:id             # Update result (Admin)
DELETE /results/:id             # Delete result (Admin)
```

### 🛡️ Admin Operations
```http
GET    /admin/dashboard         # Get dashboard statistics
GET    /admin/students          # Get all students
GET    /admin/payments          # Get payment reports
GET    /admin/analytics         # Get system analytics
```

---

---

## 🔐 Security Features

- **JWT Authentication** - Token-based secure authentication
- **Role-Based Access Control** - Granular permissions (Admin/Student)
- **Input Validation** - Comprehensive request validation with class-validator
- **Password Encryption** - Bcrypt hashing for secure password storage
- **Payment Security** - Webhook verification for payment gateways
- **Rate Limiting** - Protection against brute force attacks
- **CORS Configuration** - Controlled cross-origin requests
- **Environment Variables** - Sensitive data protection

---

## 📚 API Documentation

Interactive API documentation is available via Swagger UI:

**Development:** [http://localhost:3000/api](http://localhost:3000/api)

The Swagger interface provides:
- Complete API endpoint documentation
- Request/response schemas
- Authentication requirements
- Interactive API testing
- Model definitions

---

## 🧪 Testing

### Run All Tests
```bash
pnpm run test
```

### Run E2E Tests
```bash
pnpm run test:e2e
```

### Run Tests with Coverage
```bash
pnpm run test:cov
```

### Test Structure
```
test/
├── app.e2e-spec.ts       # End-to-end tests
└── jest-e2e.json         # E2E test configuration
```

## 🌟 Additional Features

### 🔔 Notifications System
- Email notifications for registration status, payment confirmation, and result publication
- SMS notifications (optional integration)
- Real-time notification delivery
- **Tech Stack:** Nodemailer, Twilio, BullMQ for background jobs

### 📄 Document Management
- Secure document upload (ID cards, certificates, payment receipts)
- Admin document verification workflow
- Cloud storage integration
- **Tech Stack:** Multer, AWS S3 / Cloudinary

### 📊 Admin Dashboard
- Real-time statistics (total students, payments, registrations)
- Revenue analytics and financial reports
- Student enrollment trends
- Payment status overview
- **Endpoints:** `/admin/dashboard/summary`

### 🧾 Invoice & Receipt Generation
- Auto-generated invoices with unique reference numbers
- Downloadable PDF receipts
- Professional document templates
- **Tech Stack:** PDFKit / Puppeteer

### 🕒 Audit Logs
- Comprehensive activity tracking for payments, results, and registrations
- User action logs with timestamps
- Change history for critical operations
- Compliance and accountability

### 📅 Academic Session Management
- Multiple academic sessions and semesters
- Semester-based result organization
- Result publication control and locking
- Academic year transitions

### 🔐 Two-Factor Authentication (2FA)
- Enhanced security for admin accounts
- Email or OTP-based verification
- Mandatory for sensitive operations
- **Tech Stack:** Speakeasy, QR Code generation

### ⚙️ System Configuration
- Configurable late payment penalties
- Customizable GPA grading rules
- Dynamic registration window control
- Flexible system parameters

### 📤 Data Export
- Export payment reports (CSV, Excel)
- Student data bulk export
- Result sheets generation
- Financial reports for accounting

### 🎯 API Rate Limiting & Monitoring
- Request throttling for API protection
- Error tracking and logging
- Performance monitoring
- **Tech Stack:** NestJS Throttler, Winston Logger

---

### 💡 Why These Features Matter

These enhancements make the system:
- ✅ More secure
- ✅ More scalable
- ✅ More user-friendly
- ✅ Production-ready

---

## 🛠️ Future Enhancements

- Attendance management
- Parent portal
- Email/SMS notifications
- Admin dashboard
- Audit logs

## 👨‍💻 Author

Your Name
Backend Developer (NestJS)

## 📄 License

This project is licensed under the MIT License.



