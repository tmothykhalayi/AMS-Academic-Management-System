import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Question } from 'src/question/entities/question.entity';
import { Response } from 'src/response/entities/response.entity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Survey {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => User, user => user.surveys, { onDelete: 'CASCADE' })
  user: User; // creator

  @OneToMany(() => Question, q => q.survey)
  questions: Question[];

  @OneToMany(() => Response, r => r.survey)
  responses: Response[];
}
