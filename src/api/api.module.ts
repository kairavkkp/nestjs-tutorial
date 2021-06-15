import { Module } from '@nestjs/common';
import { APIController } from './api.controller';
import { APIService } from './api.service';

@Module({
  imports: [],
  controllers: [APIController],
  providers: [APIService],
})
export class APIModule {}
