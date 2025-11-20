import { IsNotEmpty, IsIn } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  text: string;

  @IsIn(['text', 'radio', 'checkbox', 'rating'])
  type: string;

  @IsNotEmpty()
  surveyId: number;
}
