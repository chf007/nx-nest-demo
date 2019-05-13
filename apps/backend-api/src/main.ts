/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/
import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('测试接口描述文档')
    .setDescription(`<ul>
      <li>demo完全按<a href="https://docs.nestjs.cn/6/recipes?id=openapi-swagger" target="_blank">手册</a>搭建，不能自动识别接口入参和出参</li>
      <li>demo2使用了ApiImplicit*相关装饰器，可以识别</li>
    </ul>`)
    .setVersion('1.0')
    .setBasePath('api')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-ui', app, document);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.port || 3333;
  await app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/${globalPrefix}`);
  });
}

bootstrap();
