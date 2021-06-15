import { Controller, Get, Post, HttpCode, Param, Body } from '@nestjs/common';
import { Request } from 'express'
import { AppService } from './app.service';
import { CreateObject } from './dto/create-object.dto'

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('create')
  @HttpCode(204)
  async create(@Body() createObject : CreateObject) {
    return this.appService.create();
  }

  @Get('param/:id')
  printParam(@Param() params):string {
    return this.appService.printParam(params)
  }

  @Get('async')
  async asyncFunction(): Promise<any[]>  {
    return [];
  }

}
