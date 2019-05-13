import { Module } from '@nestjs/common';
import { DemoController } from './demo.controller';
import { Demo2Controller } from './demo2.controller';

@Module({
  imports: [],
  controllers: [DemoController, Demo2Controller],
})
export class DemoModule {}
