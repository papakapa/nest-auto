import { Controller, Get, Param } from '@nestjs/common';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {
  }

  @Get(':id')
  async getCarById(@Param() params) {
    return await this.carService.findOne(params.id);
  }
}
