export enum UserRole {
  STUDENT = 'student',
  ADMIN = 'admin',
}

export enum StudentStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  GRADUATED = 'graduated',
  SUSPENDED = 'suspended',
}

export enum AdminRole {
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin',
  STAFF = 'staff',
  ACCOUNTS = 'accounts',
}

// src/common/enums/registration.enum.ts
export enum RegistrationStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  ON_HOLD = 'on_hold',
}

// src/common/enums/fee.enum.ts
export enum FeeType {
  TUITION = 'tuition',
  LIBRARY = 'library',
  HOSTEL = 'hostel',
  EXAM = 'exam',
  TRANSPORT = 'transport',
  OTHER = 'other',
}

export enum InvoiceStatus {
  PENDING = 'pending',
  PARTIAL = 'partial',
  PAID = 'paid',
  OVERDUE = 'overdue',
  CANCELLED = 'cancelled',
}

// src/common/enums/payment.enum.ts
export enum PaymentMethod {
  CARD = 'card',
  BANK_TRANSFER = 'bank_transfer',
  CASH = 'cash',
  MOBILE_MONEY = 'mobile_money',
}

export enum PaymentStatus {
  PENDING = 'pending',
  SUCCESSFUL = 'successful',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
  REFUNDED = 'refunded',
}

export enum PaymentGateway {
  STRIPE = 'stripe',
  PAYSTACK = 'paystack',
  FLUTTERWAVE = 'flutterwave',
}

// src/common/enums/result.enum.ts
export enum Grade {
  A = 'A',
  A_MINUS = 'A-',
  B_PLUS = 'B+',
  B = 'B',
  B_MINUS = 'B-',
  C_PLUS = 'C+',
  C = 'C',
  C_MINUS = 'C-',
  D = 'D',
  F = 'F',
}