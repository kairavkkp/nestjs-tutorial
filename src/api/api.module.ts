import { Module } from '@nestjs/common';
import { APIController } from './api.controller';
import { APIService } from './api.service';
import { ApiResolver } from './api.resolver';

@Module({
  imports: [],
  controllers: [APIController],
  providers: [APIService, ApiResolver],
})
export class APIModule {}
