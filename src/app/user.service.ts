import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api_url } from './config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url= api_url + '/user';

  constructor(private http: HttpClient) {

    
   }
   addUser(userdata) {
    return this.http.post(this.url+'/add',userdata)
  }

  getAllUsers(){
 return this.http.get(this.url+'/getall');
  }
  getUserByUserName(username){
    return this.http.get(this.url+'/getbyusername/'+username);

  }}
