import { Controller, Get, Delete, Put, Param, Body, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';


import { ProjectService } from './project.service';
const logger=  new Logger()

@Controller("projects")
export class ProjectController {
  constructor(private readonly project_service: ProjectService) {}



  @Get(":name")
  async get(@Param("name") name:  string){  
    this.project_service.get(name)
  }
  @Get()
  async get_all(){  
    logger.debug("get all")
    return this.project_service.get_all()
  }
  @Delete(":name")
  async delete(@Param("name") name:  string){  
    this.project_service.delete(name)
  }
  @Put(":name")
  async put(@Param("name") name:  string,@Body()data){  
    this.project_service.put(name,  data)
  }
}
