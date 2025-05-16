import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ClientModule } from './client/client.module';
import { ServiceModule } from './service/service.module';
import { ReservationModule } from './reservation/reservation.module';
import { UserModule } from './user/user.module';
import { BusinessModule } from './business/business.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    ClientModule,
    ServiceModule,
    ReservationModule,
    UserModule,
    BusinessModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
