import { Controller, Get, Delete, Put, Req, Redirect, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

import { config } from "../config";

@Controller("auth")
export class AuthController {
  constructor(private readonly auth_service: AuthService) {}



  @Redirect(`${config.uri_}/authorize?client_id=${config.clientID}&redirect_uri=${config.redirectURI}&response_type=code&scope=openid%20profile&state=state-test85'`)
  @Get("login")
  async redirect(){   
  }

  @Get("token")
  async get_token(@Body() data){  
    return this.auth_service.get_token(data.code)
  }
}
