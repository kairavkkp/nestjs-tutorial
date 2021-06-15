import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  create():string{
   return "Created" 
  }

  printParam(params):string {
    return `Param Id passed was : ${params.id}.`
  }

}
