import { Injectable } from '@nestjs/common';
import { settings } from "../db";

const ServiceLayer=  require("b1-service-layer");

@Injectable()
export class ProjectService {

  async get_all() { 

    var sl = new ServiceLayer()
    await sl.createSession(settings).catch(data=>  console.log(data))
    await sl.find(`BusinessPartners`)
    .then(data=>{return  data})
    .catch(error=>  console.log(error))
  }
  async get(name:  string) {    
    var sl = new ServiceLayer()
    await sl.createSession(settings).catch(error=>  console.log(error))
    await sl.find(`BusinessPartners?$filter=ProjectName eq '${name}'`)
    .then(data=>{return  data})
    .catch(error=>  console.log(error))
  }



  

  
  

      
  


}
