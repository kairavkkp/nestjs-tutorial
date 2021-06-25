import { Query, Resolver } from '@nestjs/graphql';
import { APIService } from './api.service';

@Resolver()
export class ApiResolver {
    @Query(() => String)
    sayHello(): string {
      return 'Hello World!';
    }

    @Query(() => String)
    saySorry(): String{
        return 'Sorry!'
    }
}
