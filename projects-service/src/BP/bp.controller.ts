import { Controller, Get, Delete, Put, Param, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';


import { ProjectService } from './bp.service';


@Controller("bp")
export class ProjectController {
  constructor(private readonly bp_service: ProjectService) {}



  @Get(":name")
  async get(@Param("name") name:  string){  
    this.bp_service.get(name)
  }
  @Get()
  async get_all(){  
    this.bp_service.get_all()
  }
}
