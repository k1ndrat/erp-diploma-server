import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/entities/client.entity';
import { Order } from 'src/entities/order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    @InjectRepository(Client) private clientRepository: Repository<Client>,
  ) {}

  async getOrders() {
    return await this.orderRepository.find();
  }

  async createOrder(dto: CreateOrderDto) {
    const findClient = await this.clientRepository.findOne({
      where: { email: dto.client.email },
      relations: {
        orders: true,
      },
    });

    let newClient: Client;
    if (!findClient) {
      newClient = this.clientRepository.create({
        ...dto.client,
        createdAt: new Date(),
        orderCount: 1,
      });

      newClient = await this.clientRepository.save(newClient);
    } else {
      console.log('User exists');

      findClient.orderCount++;
      newClient = await this.clientRepository.save(findClient);
    }

    const { client, ...orderDto } = dto;

    let order = this.orderRepository.create({
      ...orderDto,
      client: newClient,
      createdAt: new Date(),
    });

    order = await this.orderRepository.save(order);

    console.log(newClient.orders);
    return order;
  }
}
