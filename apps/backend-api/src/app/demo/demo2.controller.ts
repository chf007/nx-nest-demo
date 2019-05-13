import { Controller, Get, Post, Query, Body, Param } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiImplicitParam, ApiImplicitQuery, ApiImplicitBody, ApiResponse } from '@nestjs/swagger';

import { SomeItem } from './dto';

@Controller('demo2')
@ApiUseTags('demo2')
export class Demo2Controller {
  constructor(
  ) {}


  @Post('create')
  @ApiOperation({ title: '创建' })
  @ApiImplicitBody({
    name: 'someItemDto',
    description: 'someItemDto',
    type: SomeItem,
  })
  @ApiResponse({
    status: 200,
    description: '返回数据',
  })
  async create(@Body() someItemDto: SomeItem): Promise<any> {

  }

  @Get('getDetail')
  @ApiOperation({ title: '查询' })
  @ApiImplicitQuery({
    name: 'id',
    description: 'id',
    type: 'string',
  })
  @ApiResponse({
    status: 200,
    description: '返回数据',
    type: SomeItem
  })
  async getDetail(@Query('id') id: string): Promise<any> {
    return id;
  }

}
