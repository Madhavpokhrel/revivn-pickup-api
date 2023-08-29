import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePickupRequestDto } from './dto/create-pickup-request.dto';
import { PickupRequestService } from './pickup-request.service';

@Controller('pickup-request')
export class PickupRequestController {
  constructor(private readonly pickupRequestService: PickupRequestService) {}

  @Get(':id')
  async getPickupRequest(@Param('id') id: number) {
    return this.pickupRequestService.getPickupRequest(id);
  }

  @Post()
  async createRequest(@Body() createPickupRequestDto: CreatePickupRequestDto) {
    return this.pickupRequestService.createRequest(createPickupRequestDto);
  }
}
