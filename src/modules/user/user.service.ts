import { Injectable } from '@nestjs/common';
import { client } from '../../db';

@Injectable()
export class UserService {
  async findOne(id: number) {
    const { rows } = await client.query(`SELECT * FROM users WHERE id = ${id}`);
    return rows;
  }
}