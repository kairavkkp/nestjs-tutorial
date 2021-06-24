import { Module } from '@nestjs/common';
import { APIModule } from './api/api.module';
import { GraphModule } from './graph/graph.module';

@Module({
  imports: [APIModule, GraphModule],
})
export class AppModule {}