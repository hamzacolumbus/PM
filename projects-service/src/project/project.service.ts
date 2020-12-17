import { Injectable } from '@nestjs/common';
import { settings } from "../db";

const ServiceLayer=  require("b1-service-layer");

@Injectable()
export class ProjectService {


  async get_all() { 
    var sl = new ServiceLayer()
    await sl.createSession(settings).catch(error=>  console.log(error))
    return await sl.find(`ProjectManagements`)
    .then(data=>{
      console.log(data);
      return  data
    })
    .catch(error=>  console.log(error))
  }
  async get(name:  string) {    
    var sl = new ServiceLayer()
    await sl.createSession(settings).catch(error=>  console.log(error))
    await sl.find(`ProjectManagements?$filter=ProjectName eq '${name}' `)
    .then(data=>{return  data})
    .catch(error=>  console.log(error))
  }
  async delete(name:  string) {    
    var sl = new ServiceLayer()
    await sl.createSession(settings).catch(error=>  console.log(error))
    await sl.delete(`ProjectManagements('${name}')`)
    .then(data=>{return  data})
    .catch(error=>  console.log(error))
  }
  async put(name:  string, data) {    
    var sl = new ServiceLayer()
    await sl.createSession(settings).catch(error=>  console.log(error))
    await sl.patch(`ProjectManagements(${name})`,  data)
    .then(data=>{return  data})
    .catch(error=>  console.log(error))
  }



  

  
  

      
  


}
