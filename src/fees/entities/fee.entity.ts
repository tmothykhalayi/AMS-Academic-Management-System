
import {FeeType  } from "../../Enum";
import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, Entity, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Admin } from '../../users/entities/user.entity';
import { InvoiceItem } from '../../invoice/entities/invoice.entity';
@Entity()
export class Fee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string; // e.g., "Tuition Fee", "Library Fee"

  @Column()
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'enum', enum: FeeType })
  feeType: FeeType; // TUITION, LIBRARY, HOSTEL, EXAM, OTHER

  @Column()
  academicYear: string; // e.g., "2024-2025"

  @Column({ nullable: true })
  semester: string; // e.g., "SEMESTER_1"

  @Column({ nullable: true })
  className: string; // If fee is class-specific

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  dueDate: Date;

  @Column({ default: 0 })
  latePenalty: number;

  // Relationships
  @ManyToOne(() => Admin, (admin) => admin.fees)
  @JoinColumn({ name: 'createdById' })
  createdBy: Admin;

  @Column()
  createdById: string;

  @OneToMany(() => InvoiceItem, (item) => item.fee)
  invoiceItems: InvoiceItem[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}