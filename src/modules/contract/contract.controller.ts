import { Body, Controller, Post } from '@nestjs/common';
import { ContractService } from './contract.service';

@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {
  }

  @Post('create')
  async createSession(@Body('data') data) {
    return await this.contractService.createContract(data);
  }
}
