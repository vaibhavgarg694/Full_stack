import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api_url } from './config';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url = api_url + '/order';
  constructor(private http: HttpClient) { }

  getAllOrders() {
    return this.http.get(this.url + '/getall');
  }

  addOrder(data) {
    return this.http.post(this.url + '/add', data);
  }

  getOrderByUser(user_id) {
    return this.http.get(this.url + '/getbyuser/' + user_id);
  }

  updateOrder() {

  }
}
