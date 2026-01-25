export class Registration {}
// src/registration/entities/registration.entity.ts
@Entity()
export class Registration {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  applicationNumber: string; // APP-2024-001

  @Column({ type: 'text', nullable: true })
  applicationData: string; // JSON string of form data

  @Column({ type: 'enum', enum: RegistrationStatus, default: RegistrationStatus.PENDING })
  status: RegistrationStatus;

  @Column({ nullable: true })
  remarks: string;

  @Column({ nullable: true })
  academicYear: string;

  @Column({ nullable: true })
  intendedClass: string;

  // Relationships
  @ManyToOne(() => Student, (student) => student.registrations, { nullable: true })
  @JoinColumn({ name: 'studentId' })
  student: Student;

  @Column({ nullable: true })
  studentId: string;

  @ManyToOne(() => Admin, { nullable: true })
  @JoinColumn({ name: 'approvedById' })
  approvedBy: Admin;

  @Column({ nullable: true })
  approvedById: string;

  @Column({ nullable: true })
  approvedAt: Date;

  // Documents
  @Column({ nullable: true })
  birthCertificateUrl: string;

  @Column({ nullable: true })
  previousMarksheetUrl: string;

  @Column({ nullable: true })
  photoUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}