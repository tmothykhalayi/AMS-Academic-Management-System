import { IsNotEmpty } from 'class-validator';

export class CreateResponseDto {
  @IsNotEmpty()
  answer: any; // JSON data

  @IsNotEmpty()
  surveyId: number;

  @IsNotEmpty()
  questionId: number;

  @IsNotEmpty()
  userId: number; // respondent
}
