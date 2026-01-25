export class User {}

// src/users/entities/user.entity.ts
@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export abstract class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  address: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.STUDENT })
  role: UserRole;

  @Column({ default: false })
  isActive: boolean;

  @Column({ nullable: true })
  refreshToken: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

// Student Entity (extends User)
@Entity()
@ChildEntity()
export class Student extends User {
  @Column({ unique: true })
  studentId: string; // Auto-generated: GSS-2024-001

  @Column({ type: 'date', nullable: true })
  dateOfBirth: Date;

  @Column({ nullable: true })
  guardianName: string;

  @Column({ nullable: true })
  guardianPhone: string;

  @Column({ type: 'enum', enum: StudentStatus, default: StudentStatus.PENDING })
  status: StudentStatus;

  @Column({ nullable: true })
  currentClass: string;

  @Column({ nullable: true })
  admissionYear: number;

  // Relationships
  @OneToMany(() => Registration, (registration) => registration.student)
  registrations: Registration[];

  @OneToMany(() => Invoice, (invoice) => invoice.student)
  invoices: Invoice[];

  @OneToMany(() => Payment, (payment) => payment.student)
  payments: Payment[];

  @OneToMany(() => Result, (result) => result.student)
  results: Result[];
}

// Admin Entity (extends User)
@Entity()
@ChildEntity()
export class Admin extends User {
  @Column({ unique: true })
  employeeId: string;

  @Column({ type: 'enum', enum: AdminRole, default: AdminRole.STAFF })
  adminRole: AdminRole;

  @Column({ nullable: true })
  department: string;

  // Relationships
  @OneToMany(() => Fee, (fee) => fee.createdBy)
  fees: Fee[];

  @OneToMany(() => Registration, (reg) => reg.approvedBy)
  approvedRegistrations: Registration[];
}