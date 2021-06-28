import { Module } from '@nestjs/common';
import { ContractController } from './contract.controller';
import { ContractService } from './contract.service';
import { RateService } from '../rate/rate.service';

@Module({
  controllers: [ContractController],
  providers: [ContractService, RateService]
})
export class ContractModule {}
