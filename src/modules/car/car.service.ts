import { Injectable } from '@nestjs/common';
import { client } from '../../db';

@Injectable()
export class CarService {
  async findOne(id: number) {
    const { rows } = await client.query(`SELECT * FROM cars WHERE id = ${id}`);
    return rows;
  }
}
