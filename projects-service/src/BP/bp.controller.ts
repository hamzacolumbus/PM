import { Controller, Get, Delete, Put, Param, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { BpService } from './bp.service';

@Controller("bp")
export class BpController {
  constructor(private readonly bp_service: BpService) {}

  
  @Get()
  async get_all(){  
    this.bp_service.get_all()
  }
}
