import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PickupRequest } from './entity/pickup-request.entity';
import { PickupRequestController } from './pickup-request.controller';
import { PickupRequestService } from './pickup-request.service';

@Module({
  imports: [TypeOrmModule.forFeature([PickupRequest])],
  controllers: [PickupRequestController],
  providers: [PickupRequestService],
  exports: [PickupRequestService],
})
export class PickupRequestModule {}
