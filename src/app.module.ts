import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiclesModule } from './modules/vehicles/vehicles.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { OwnerModule } from './modules/owner/owner.module';

@Module({
  imports: [PrismaModule, VehiclesModule, OwnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
