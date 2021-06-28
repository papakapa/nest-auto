import { Injectable } from '@nestjs/common';
import { client } from '../../db';

@Injectable()
export class ContractService {
  async createContract(entryData) {
    const price = 500;
    return await client.query(`INSERT INTO contracts (car_id, rate_id, user_id, start_date, end_date, min_price)
    VALUES(${entryData.car_id}, ${entryData.rate_id}, ${entryData.user_id}, '2021-06-28', '2021-07-01', ${price})
`);
  }
}
