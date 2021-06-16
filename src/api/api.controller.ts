import { Controller, Get, Post, HttpCode, Param, Body } from '@nestjs/common';
import { Request } from 'express'
import { APIService } from './api.service';
import { API } from './dto/create-object.dto'
import { IAPI } from './interfaces/api.interface'

@Controller('api')
export class APIController {
  constructor(private appService: APIService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('create')
  @HttpCode(204)
  async create(@Body() createObject : API) {
    return this.appService.create();
  }

  @Get('param/:id')
  printParam(@Param() params):string {
    return this.appService.printParam(params)
  }

  @Get('async')
  async asyncFunction(): Promise<IAPI[]>  {
    return [];
  }

}
