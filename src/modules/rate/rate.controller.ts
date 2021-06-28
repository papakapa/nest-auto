import { Controller, Get, Param } from '@nestjs/common';
import { RateService } from './rate.service';

@Controller('rate')
export class RateController {
  constructor(private readonly rateService: RateService) {
  }

  @Get(':id')
  async getById(@Param() params) {
    return await this.rateService.findOne(params.id);
  }
}
