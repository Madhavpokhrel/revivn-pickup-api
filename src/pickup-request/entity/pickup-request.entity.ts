import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pickup-request')
export class PickupRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  location: String;

  @Column()
  status: String;
}
