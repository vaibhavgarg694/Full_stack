import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { api_url } from './config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = api_url + '/user';

  loggedin = false;
  currentUser;
  constructor(private http: HttpClient, private router: Router) {
    if (sessionStorage.getItem('user')) {
      this.loggedin = true;
      this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    }
  }

  addUser(userdata) {
    return this.http.post(this.url + '/add', userdata)
  }

  getAllUsers() {
    return this.http.get(this.url + '/getall');
  }
  getUserByUserName(username) {
    return this.http.get(this.url + '/getbyusername/' + username);
  }

  getuserbyEmail(email) {
    return this.http.get(this.url + '/getbyemail/' + email);
  }

  updateUser(id, data) {
    return this.http.put(this.url + '/update/' + id, data);
  }

  logout() {
    this.loggedin = false;
    sessionStorage.removeItem('user');

    Swal.fire({
      icon: 'success',
      title: 'Logout done',
      timer: 1000,
      timerProgressBar: true,
      text: 'Thanks!!'
    })
    this.router.navigate(['/app/login']);
  }
}
