import { Injectable } from '@nestjs/common';
import { settings } from "../db";

const ServiceLayer=  require("b1-service-layer");

@Injectable()
export class BpService {

  async get_all() { 
    var sl = new ServiceLayer()
    await sl.createSession(settings).catch(data=>  console.log(data))
    await sl.find(`BusinessPartners`)
    .then(data=>{return  data})
    .catch(error=>  console.log(error))
  }



  

  
  

      
  


}
