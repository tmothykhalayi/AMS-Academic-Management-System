import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Student } from '../../users/entities/user.entity';
import { Payment } from '../../payments/entities/payment.entity';
import { Fee } from '../../fees/entities/fee.entity';
import { InvoiceStatus } from '../../Enum';
// src/fees/entities/invoice.entity.ts
@Entity()
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  invoiceNumber: string; // INV-2024-001

  @Column()
  academicYear: string;

  @Column({ nullable: true })
  semester: string;

  @Column('decimal', { precision: 10, scale: 2 })
  totalAmount: number;

  @Column('decimal', { precision: 10, scale: 2 })
  amountPaid: number;

  @Column('decimal', { precision: 10, scale: 2 })
  balance: number;

  @Column({ type: 'enum', enum: InvoiceStatus, default: InvoiceStatus.PENDING })
  status: InvoiceStatus;

  @Column({ nullable: true })
  dueDate: Date;

  @Column({ nullable: true })
  paidDate: Date;

  // Relationships
  @ManyToOne(() => Student, (student) => student.invoices)
  @JoinColumn({ name: 'studentId' })
  student: Student;

  @Column()
  studentId: string;

  @OneToMany(() => InvoiceItem, (item) => item.invoice, { cascade: true })
  items: InvoiceItem[];

  @OneToMany(() => Payment, (payment) => payment.invoice)
  payments: Payment[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

// Invoice Item Entity
@Entity()
export class InvoiceItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column({ nullable: true })
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  // Relationships
  @ManyToOne(() => Invoice, (invoice) => invoice.items)
  @JoinColumn({ name: 'invoiceId' })
  invoice: Invoice;

  @Column()
  invoiceId: string;

  @ManyToOne(() => Fee, (fee) => fee.invoiceItems)
  @JoinColumn({ name: 'feeId' })
  fee: Fee;

  @Column({ nullable: true })
  feeId: string;
}