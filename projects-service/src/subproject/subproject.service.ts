import { Injectable } from '@nestjs/common';
import { settings } from "../db";

const ServiceLayer=  require("b1-service-layer");

@Injectable()
export class SubprojectService {

  async get_all(data) { 
    var sl = new ServiceLayer()
    await sl.createSession(settings).catch(data=>  console.log(data))
    await sl.post(`ProjectManagementService_GetSubprojectsList`,  data)
    .then(data=>{return  data})
    .catch(error=>  console.log(error))
  }


  
  async get(data) {    
    var sl = new ServiceLayer()
    await sl.createSession(settings).catch(error=>  console.log(error))
    await sl.post(`ProjectManagementService_GetSubproject`,  data)
    .then(data=>{return  data})
    .catch(error=>  console.log(error))
  }
  async delete(data) {    
    var sl = new ServiceLayer()
    await sl.createSession(settings).catch(error=>  console.log(error))
    await sl.post(`ProjectManagementService_DeleteSubproject`,  data)
    .then(data=>{return  data})
    .catch(error=>  console.log(error))
  }
  async put(  data) {    
    var sl = new ServiceLayer()
    await sl.createSession(settings).catch(error=>  console.log(error))
    await sl.post(`ProjectManagementService_UpdateSubproject`,  data)
    .then(data=>{return  data})
    .catch(error=>  console.log(error))
  }

  async create(  data) {    
    var sl = new ServiceLayer()
    await sl.createSession(settings).catch(error=>  console.log(error))
    await sl.post(`ProjectManagementService_AddSubproject`,  data)
    .then(data=>{return  data})
    .catch(error=>  console.log(error))
  }

  
  

      
  


}
