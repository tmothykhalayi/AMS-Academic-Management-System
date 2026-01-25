import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { PaymentMethod, PaymentStatus, PaymentGateway } from '../../Enum';
import { Invoice } from '../../invoice/entities/invoice.entity';
import { Admin ,Student }  from '../../users/entities/user.entity';

// src/payments/entities/payment.entity.ts
@Entity()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  reference: string; // Payment gateway reference

  @Column({ unique: true })
  transactionId: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'enum', enum: PaymentMethod })
  method: PaymentMethod; // CARD, BANK_TRANSFER, CASH, MOBILE_MONEY

  @Column({ type: 'enum', enum: PaymentStatus, default: PaymentStatus.PENDING })
  status: PaymentStatus;

  @Column({ type: 'enum', enum: PaymentGateway, nullable: true })
  gateway: PaymentGateway; // STRIPE, PAYSTACK, FLUTTERWAVE

  @Column({ type: 'jsonb', nullable: true })
  gatewayResponse: Record<string, any>;

  @Column({ nullable: true })
  paidAt: Date;

  @Column({ nullable: true })
  verifiedAt: Date;

  @Column({ nullable: true })
  receiptUrl: string;

  // Relationships
  @ManyToOne(() => Student, (student) => student.payments)
  @JoinColumn({ name: 'studentId' })
  student: Student;

  @Column()
  studentId: string;

  @ManyToOne(() => Invoice, (invoice) => invoice.payments)
  @JoinColumn({ name: 'invoiceId' })
  invoice: Invoice;

  @Column()
  invoiceId: string;

  @ManyToOne(() => Admin, { nullable: true })
  @JoinColumn({ name: 'verifiedById' })
  verifiedBy: Admin;

  @Column({ nullable: true })
  verifiedById: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}