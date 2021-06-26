import { Args, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { APIService } from './api.service';
import { API } from './dto/create-object.dto';
import { IAPI } from './interfaces/api.interface';

@Resolver(()=>API)
export class ApiResolver {
    @Query(() => String)
    sayHello(): string {
      return 'Hello World!';
    }

    @Query(() => String)
    saySorry(): String{
        return 'Sorry!'
    }

    // @Mutation(() => API)
    // create(@Args('input') input: IAPI){
    //     return input
    // }
}
