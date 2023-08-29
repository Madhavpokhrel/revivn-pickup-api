import { PartialType } from '@nestjs/mapped-types';
import { CreatePickupRequestDto } from './create-pickup-request.dto';

export class UpdatePickupRequestDto extends PartialType(
  CreatePickupRequestDto,
) {}
