/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { NameDTO } from './DTOs/app.dto';
import { JokeDTO } from './DTOs/joke.dto';
import { MathService } from './math/math.service';
import { NumbersDTO } from './DTOs/numbers.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private readonly mathService: MathService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api')
  getApi():string {
    return 'API endpoint';
  }

  @Post('/name')
  sendName(@Body() data:NameDTO): string {
    return `Hello ${data.name}`;
  }

  @Get('/joke')
  getJoke():JokeDTO {
    return {
      content: 'Why did the chicken cross the road?',
      author: 'J.K. Rowling'
    };
  }

  @Get('/get/:id')
  getById(@Param('id') userId, @Query('name') userName,@Query('age') age): string {
    return `User ID: ${userId} and Name: ${userName} with age ${age}`;
  }

  @Post('/get-sum')
  getSum(@Body() data:NumbersDTO): string {
    return `The sum of ${data.a} and ${data.b} is ${this.mathService.getSum(data.a, data.b)}`;
  }

}
