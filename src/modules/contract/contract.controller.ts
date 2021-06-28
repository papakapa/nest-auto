import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ICreateContract } from './interfaces/create-contract.interface';

@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {
  }

  @Post('create')
  async createSession(@Body('data') data: ICreateContract) {
    return await this.contractService.createContract(data);
  }

  @Get('price')
  getPrice() {
    this.contractService.getPriceOfInterval('2021-06-28', '2021-07-01', 1);
    return 'heh';
  }
}
