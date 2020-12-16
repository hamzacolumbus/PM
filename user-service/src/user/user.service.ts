import { Injectable } from '@nestjs/common';
import { settings } from "../db";

import { request } from "request";
import ServiceLayer from "b1-service-layer";

import { User } from 'src/dto/User';
import { config } from "../config";
@Injectable()
export class UserService {

  async userinfo(token:  string):  Promise<User>{
    var user:  User
  if (token) {
     request(
       {
         method: 'GET',
         uri: `${config.uri_}/userinfo`,
         headers: {
           'Authorization': 'Bearer ' + token
         }
       },
       // callback
       async (error, response, body) => {
        user= await this.save_user(JSON.parse(body))
       })
     }
     return user
   }

  
  async save_user(user){
    var sl = new ServiceLayer()
    let found
    await sl.createSession(settings).catch(data=>  console.log(data))
    await sl.get(`EmployeesInfo?$filter=eMail eq '${user.preferred_username}'`)
    .then(data=>{ 
      data.value.length==0?  found=  null  :  found=  data.value[0]
    })
    .catch(error=>  console.log("error"))
    if (found  !=null) {
      return found
    }
    else{
      console.log(user);
      let name=  user.name.split(' ')
      found={
        FirstName:  name[0],
        LastName:  name[1],
  
        eMail:  user.preferred_username
      }
      await sl.post(`EmployeesInfo`,found)
      .then(data=>{
        return found
      })
      .catch(error=>  console.log("error"))
    }
   }

}
