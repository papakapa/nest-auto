import { Injectable } from '@nestjs/common';
import { client } from '../../db';

@Injectable()
export class RateService {
  async findOne(id: number) {
    const { rows } = await client.query(`SELECT * FROM rates WHERE id = ${id}`);
    return rows;
  }
}
