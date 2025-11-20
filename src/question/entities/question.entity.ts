import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Survey } from 'src/survey/entities/survey.entity';
import { Response } from 'src/response/entities/response.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  type: string;

  @ManyToOne(() => Survey, survey => survey.questions, { onDelete: 'CASCADE' })
  survey: Survey;

  @OneToMany(() => Response, r => r.question)
  answers: Response[];
}
