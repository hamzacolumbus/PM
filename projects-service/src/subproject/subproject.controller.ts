import { Controller, Get, Delete, Put, Param, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { SubprojectService } from './subproject.service';


@Controller("subprojects")
export class SubprojectController {
  constructor(private readonly bp_service: SubprojectService) {}

  @Get("subproject")
  async get(@Body()data){  
    this.bp_service.get(data)
  }
  @Delete()
  async delete(  @Body()data){  
    this.bp_service.delete(data)
  }
  @Put()
  async put(  @Body()data){  
    this.bp_service.put(data)
  }
  @Get()
  async get_all(@Body()data){  
    this.bp_service.get_all(data)
  }
}
