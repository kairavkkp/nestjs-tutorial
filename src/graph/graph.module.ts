import { Module } from '@nestjs/common';
import { GraphResolver } from './graph.resolver';
import { GraphController } from './graph.controller';

@Module({
  providers: [GraphResolver],
  controllers: [GraphController]
})
export class GraphModule {}
