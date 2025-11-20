import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSurveyDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  description?: string;

  @IsNotEmpty()
  userId: number; // creator
}
