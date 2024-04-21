import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Client } from './client.entity';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'clientId' })
  clientID: number;

  @ManyToOne(() => Client, (client) => client.orders)
  @JoinColumn({ name: 'clientId' })
  client: Client;

  @Column()
  marketplace: string;

  @Column()
  orderNumber: number;

  @Column()
  good: string;

  @Column()
  color: string;

  @Column()
  carrier: string;

  @Column()
  deliveryAddress: string;

  @Column()
  paymentType: string;

  @Column()
  price: number;

  @Column()
  invoice: number;

  @Column()
  createdAt: Date;
}
