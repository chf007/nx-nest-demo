import { Controller, Get, Post, Query, Body, Param } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiImplicitParam, ApiImplicitQuery, ApiImplicitBody, ApiResponse } from '@nestjs/swagger';

import { SomeItem } from './dto';

@Controller('demo')
@ApiUseTags('demo')
export class DemoController {
  constructor(
  ) {}


  @Post('create')
  @ApiOperation({ title: '创建' })
  async create(@Body() someItemDto: SomeItem): Promise<any> {

  }

  @Get('getDetail')
  @ApiOperation({ title: '查询' })
  async getDetail(@Query('id') id: string): Promise<any> {
    return id;
  }

}
