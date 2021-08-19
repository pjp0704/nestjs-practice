import { Controller, Get, HttpException, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './http-exception.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseFilters(HttpExceptionFilter)
  getHello(): string {
    throw new HttpException('api broken', 401);
    return this.appService.getHello();
  }
}
