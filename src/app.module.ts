import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveyModule } from './survey/survey.module';
import { QuestionModule } from './question/question.module';
import { ResponseModule } from './response/response.module';
import { UserModule } from './user/user.module';
import { DatabaseModule} from './database/database.module'; 

@Module({
  imports: [SurveyModule, QuestionModule, ResponseModule, UserModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
