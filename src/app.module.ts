import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { AppService } from './app.service';
import { AuthModule } from './api/auth/auth.module';
import { OrderMenuController } from './api/foodman/BookingOrder/bk.controller';
import { BookingModule } from './api/foodman/BookingOrder/bk.module';
// import { HttpExceptionFilter } from './common/http-exception.filter';
import { DeliveryController } from './api/foodman/Menu/menu.controller';
import { DeliveryModule } from './api/foodman/Menu/menu.module';
import { MembersController } from './api/foodman/Member/member.controller';
import { CatsModule } from './api/foodman/Member/member.module';
import { OrderController } from 'src/api/foodman/restaurant/res.controller';
import { OrderModule } from 'src/api/foodman/restaurant/res.module';
import { BedModule } from './api/foodman/BedQ/bed.module';
import { BedController } from './api/foodman/BedQ/bed.controller';
import { UserController } from './api/foodman/user/user.controller';
import { userModule } from './api/foodman/user/user.module';
import { ApplyModule } from './api/smart-city/Apply/apply.module';
import { ApplyController } from './api/smart-city/Apply/apply.controller';
import { AppealModule } from './api/smart-city/Appeal/appeal.module';
import { AppealController } from './api/smart-city/Appeal/appeal.controller';
import { PetitionModule } from './api/smart-city/petition/petition.module';
import { petitionController } from './api/smart-city/petition/petition.controller';
import { UserSmartModule } from './api/smart-city/user-smartcity/user.module';
import { userSmartController } from './api/smart-city/user-smartcity/user.controller';
import { AdminSmartCityModule } from './api/smart-city/user-login/user.module';
import { AdminController } from './api/smart-city/user-login/user.controller';
import { healthModule } from './api/smart-city/health/health.module';
import { healthController } from './api/smart-city/health/health.controller';
import { diseaseModule } from './api/smart-city/disease/disease.module';
import { diseaseController } from './api/smart-city/disease/disease.controller';
import { protestController } from './api/smart-city/protest/protest.controller';
import { protestModule } from './api/smart-city/protest/protest.module';
import { happyModule } from './api/smart-city/happy/happy.module';
import { happyController } from './api/smart-city/happy/happy.controller';
import { dementiaController } from './api/smart-city/dementia/dementia.controller';
import { dementiaModule } from './api/smart-city/dementia/dementia.module';
import { stressModule } from './api/smart-city/stress/stress.module';
import { stressController } from './api/smart-city/stress/stress.controller';
import { employeeModule } from './api/smart-city/employee health/employee.module';
import { employeeController } from './api/smart-city/employee health/employee.controller';
import { lifesurveyModule } from './api/smart-city/life survey/life survey.module';
import { lifesurveyController } from './api/smart-city/life survey/life survey.controller';
// import { diseaseController } from './api/smart-city/disease/disease.controller';
// import { diseaseModule } from './api/smart-city/disease/disease.module';


@Module({
  imports: [
    // CatsModule,
    MongooseModule.forRoot('mongodb+srv://nariengtown:nariengtown2566@cluster0.wi5fm3q.mongodb.net/'),
    AuthModule,
    // BookingModule,
    // DeliveryModule,
    // OrderModule,
    // BedModule,
    // userModule,
    ApplyModule,
    AppealModule,
    PetitionModule,
    UserSmartModule,
    AdminSmartCityModule,
    healthModule,
    diseaseModule,
    protestModule,
    happyModule,
    dementiaModule,
    stressModule,
    employeeModule,
    lifesurveyModule
  ],
  controllers: [
    // MembersController,
    // BedController,
    // UserController,
    ApplyController,
    AppealController,
    petitionController,
    userSmartController,
    AdminController,
    healthController,
    diseaseController,
    protestController,
    happyController,
    dementiaController,
    stressController,
    employeeController,
    lifesurveyController
  ],
  providers: [
    AppService,
  ],
})
export class AppModule { }
