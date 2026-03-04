import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule} from './database/database.module'; 
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RegistrationsModule } from './registrations/registrations.module';
import { FeesModule } from './fees/fees.module';
import { PaymentsModule } from './payments/payments.module';
import { ResultsModule } from './results/results.module';
import { InvoiceModule } from './invoice/invoice.module';
import { AcademicSessionModule } from './academic-session/academic-session.module';
import { AuditLogModule } from './audit-log/audit-log.module';

@Module({
  imports: [ DatabaseModule, AuthModule, UsersModule,
     RegistrationsModule, FeesModule, PaymentsModule, 
     ResultsModule,  InvoiceModule,
      AcademicSessionModule, AuditLogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
