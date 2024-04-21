import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Warehouse } from './warehouse.entity';

@Entity({ name: 'goods' })
export class Good {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  size: string;

  @Column()
  color: string;

  @Column({ nullable: true })
  fabric: string;

  @Column({ nullable: true })
  filler: string;

  @Column()
  price: number;

  @Column()
  type: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  weight: string;

  @Column({ nullable: true })
  set: string;

  @Column({ nullable: true })
  footage: number;

  @OneToOne(() => Warehouse, (warehouse) => warehouse.good)
  warehouse: Warehouse;
}
