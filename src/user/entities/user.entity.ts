import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Survey } from 'src/survey/entities/survey.entity';
import { Response } from 'src/response/entities/response.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Survey, survey => survey.user)
  surveys: Survey[];

  @OneToMany(() => Response, response => response.user)
  responses: Response[];
}
