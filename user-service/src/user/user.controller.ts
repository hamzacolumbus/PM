import { Controller, Get, Delete, Put, Req, Session, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/dto/User';
import { Active_t } from 'src/dto/Active_t';


@Controller("user")
export class UserController {
  constructor(private readonly user_service: UserService) {}



  @Get()
  async get_user(@Body() data,  @Session() session){  
    const user:  User= await this.user_service.userinfo(data.token)
    session.user=  new User(  user.FirstName,  user.LastName,  user.eMail,  Active_t.tNO)
  }
}
