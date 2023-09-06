import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import {json} from 'express'
// import { HttpExceptionFilter } from './common/http-exception.filter';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(json({limit: '50mb'}));
  const options = new DocumentBuilder()

  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('cats')
  .build();
  
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);


  app.use(cookieParser());
  app.enableCors();
  await app.listen(process.env.PORT || 3005);
  
  //await app.listen(9136);
}
bootstrap();


// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.useGlobalPipes(new ValidationPipe)
//   const options = new DocumentBuilder()
//     .setTitle('Cats example')
//     .setDescription('The cats API description')
//     .setVersion('1.0')
//     .addTag('cats')
//     .build();
//   const document = SwaggerModule.createDocument(app, options);
//   SwaggerModule.setup('api', app, document);
//   app.useGlobalFilters(new HttpExceptionFilter());
//   app.enableCors();
//   await app.listen(process.env.PORT || '5002');
  
// }
// bootstrap();