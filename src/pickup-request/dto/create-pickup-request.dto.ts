import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreatePickupRequestDto {
  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @IsNotEmpty()
  @IsString()
  location: String;

  @IsNotEmpty()
  @IsString()
  status: String;
}
