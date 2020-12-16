import { Injectable } from '@nestjs/common';
const OktaJwtVerifier = require('@okta/jwt-verifier');

import request from "request";
import { config } from "../config";

@Injectable()
export class AuthService {
    

  async get_token(code:  string) {
    request(
      {
        method: 'POST',
        uri: `${config.uri_}/token`,
        form: {
          'client_id': config.clientID,
          'client_secret': config.clientSecret,
          'code': code,
          'grant_type': 'authorization_code',
          'redirect_uri': config.redirectURI,
          'accept': 'application/json'
        },
      },
      (error, response, body) => {
        console.log(body);
        return body
      }
    );
  }

  async verify(token, au) {
  }



  

  
  

      
  


}
