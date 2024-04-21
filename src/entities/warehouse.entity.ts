import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Good } from './good.entity';

@Entity({ name: 'warehouse' })
export class Warehouse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomer: number;

  @Column()
  createdAt: Date;

  @Column()
  count: number;

  @Column({ name: 'goodId' })
  goodId: number;

  @OneToOne(() => Good, (good) => good.warehouse)
  @JoinColumn({ name: 'goodId' })
  good: Good;
}
