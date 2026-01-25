export class AcademicSession {}

// src/common/entities/academic-session.entity.ts
@Entity()
export class AcademicSession {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string; // e.g., "2024-2025"

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column({ default: false })
  isCurrent: boolean;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  registrationStart: Date;

  @Column({ nullable: true })
  registrationEnd: Date;

  @Column({ nullable: true })
  resultPublicationDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}