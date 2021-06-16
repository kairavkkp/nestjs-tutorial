import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class APIService {
  getHello(): string {
    return 'Hello World!';
  }

  create():string{
   return "Created" 
  }

  printParam(id, arr):string {
    return `Param Id passed was : ${id} and array is ${arr}.`
  }

}
