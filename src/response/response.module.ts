import { Module } from '@nestjs/common';
import { ResponseService } from './response.service';
import { ResponseController } from './response.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Response } from './entities/response.entity';
import { Survey } from 'src/survey/entities/survey.entity';
import { Question } from 'src/question/entities/question.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Response, Survey, Question, User])],
  controllers: [ResponseController],
  providers: [ResponseService],
  exports: [ResponseService, TypeOrmModule],
})
export class ResponseModule {}
