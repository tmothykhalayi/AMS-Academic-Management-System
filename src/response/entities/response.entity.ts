import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Survey } from 'src/survey/entities/survey.entity';
import { Question } from 'src/question/entities/question.entity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Response {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json')
  answer: any;

  @ManyToOne(() => Survey, survey => survey.responses, { onDelete: 'CASCADE' })
  survey: Survey;

  @ManyToOne(() => Question, question => question.answers, { onDelete: 'CASCADE' })
  question: Question;

  @ManyToOne(() => User, user => user.responses, { onDelete: 'SET NULL' })
  user: User; // the respondent
}
