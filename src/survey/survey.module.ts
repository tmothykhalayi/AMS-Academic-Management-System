import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from './entities/survey.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Survey, User])],
  controllers: [SurveyController],
  providers: [SurveyService],
  exports: [SurveyService, TypeOrmModule],
})
export class SurveyModule {}
