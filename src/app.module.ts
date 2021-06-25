import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { APIModule } from './api/api.module';

@Module({
  imports: [
    APIModule,
    GraphQLModule.forRoot({autoSchemaFile: 'schema.gql'})
  ],
})
export class AppModule {}