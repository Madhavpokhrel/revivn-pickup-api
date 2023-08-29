import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as _ from 'lodash';
import { Repository } from 'typeorm';
import { CreatePickupRequestDto } from './dto/create-pickup-request.dto';
import { PickupRequest } from './entity/pickup-request.entity';

@Injectable()
export class PickupRequestService {
  constructor(
    @InjectRepository(PickupRequest)
    private readonly pickupRequestRepo: Repository<PickupRequest>,
  ) {}

  async getPickupRequest(id: number) {
    return this.pickupRequestRepo.findOne({ where: { id } });
  }

  async createRequest(
    createPickupRequestDto: CreatePickupRequestDto,
  ): Promise<PickupRequest> {
    console.log('createPickupRequestDto', createPickupRequestDto);
    const pickupRequest = this.pickupRequestRepo.create(createPickupRequestDto);
    return this.pickupRequestRepo.save(pickupRequest);
  }
}
