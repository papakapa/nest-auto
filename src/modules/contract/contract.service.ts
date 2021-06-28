import { Injectable } from '@nestjs/common';
import { client } from '../../db';
import * as moment from 'moment';
import { RateService } from '../rate/rate.service';
import { ICreateContract } from './interfaces/create-contract.interface';

@Injectable()
export class ContractService {
  constructor(private readonly rateService: RateService) {
  }

  async createContract(entryData: ICreateContract) {
    const price = await this.getPriceOfInterval(entryData.start_date, entryData.end_date, entryData.rate_id);
    return await client.query(`INSERT INTO contracts (car_id, rate_id, user_id, start_date, end_date, min_price)
    VALUES(${entryData.car_id}, ${entryData.rate_id}, ${entryData.user_id}, '${entryData.start_date}', '${entryData.end_date}', ${price})
`);
  }


  async getPriceOfInterval(start: string, end: string, rateId: number): Promise<number> {
    const startDate = moment(start, 'YYYY-MM-DD').valueOf();
    const endDate = moment(end, 'YYYY-MM-DD').valueOf();
    const interval = moment.duration(endDate - startDate);
    const [rate] = await this.rateService.findOne(rateId);

    return rate.price * interval.asDays();
  }
}
