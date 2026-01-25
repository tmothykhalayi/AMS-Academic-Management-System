export class Result {}
// src/results/entities/result.entity.ts
@Entity()
export class Result {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  academicYear: string;

  @Column()
  semester: string;

  @Column()
  className: string;

  @Column()
  subject: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  marksObtained: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  totalMarks: number;

  @Column({ type: 'decimal', precision: 3, scale: 2, nullable: true })
  percentage: number;

  @Column({ type: 'enum', enum: Grade, nullable: true })
  grade: Grade;

  @Column({ type: 'decimal', precision: 3, scale: 2, nullable: true })
  gradePoint: number;

  @Column({ nullable: true })
  remarks: string;

  @Column({ default: false })
  isPublished: boolean;

  // Relationships
  @ManyToOne(() => Student, (student) => student.results)
  @JoinColumn({ name: 'studentId' })
  student: Student;

  @Column()
  studentId: string;

  @ManyToOne(() => Admin, { nullable: true })
  @JoinColumn({ name: 'uploadedById' })
  uploadedBy: Admin;

  @Column()
  uploadedById: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

// GPA Summary Entity
@Entity()
export class GPASummary {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  academicYear: string;

  @Column()
  semester: string;

  @Column({ type: 'decimal', precision: 3, scale: 2 })
  gpa: number;

  @Column({ type: 'decimal', precision: 3, scale: 2 })
  cgpa: number;

  @Column()
  totalCredits: number;

  @Column()
  creditsEarned: number;

  // Relationships
  @ManyToOne(() => Student, (student) => student.results)
  @JoinColumn({ name: 'studentId' })
  student: Student;

  @Column()
  studentId: string;

  @CreateDateColumn()
  createdAt: Date;
}