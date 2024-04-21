import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';

@Entity({ name: 'clients' })
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column()
  city: string;

  @Column()
  department: string;

  @Column()
  orderCount: number;

  @Column()
  createdAt: Date;

  @OneToMany(() => Order, (order) => order.client)
  orders: Order[];
}
