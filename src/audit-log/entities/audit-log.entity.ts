import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class AuditLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  action: string; // e.g., "REGISTRATION_APPROVED", "PAYMENT_VERIFIED"

  @Column({ type: 'jsonb', nullable: true })
  oldData: Record<string, any>;

  @Column({ type: 'jsonb', nullable: true })
  newData: Record<string, any>;

  @Column({ nullable: true })
  entityId: string;

  @Column({ nullable: true })
  entityType: string;

  @Column()
  ipAddress: string;

  @Column({ nullable: true })
  userAgent: string;

  // Relationships
  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'performedById' })
  performedBy: User;

  @Column({ nullable: true })
  performedById: string;

  @CreateDateColumn()
  createdAt: Date;
}