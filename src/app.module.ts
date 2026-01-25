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
import { AdminModule } from './admin/admin.module';
import { InvoiceModule } from './invoice/invoice.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [ DatabaseModule, AuthModule, UsersModule, RegistrationsModule, FeesModule, PaymentsModule, ResultsModule, AdminModule, InvoiceModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
