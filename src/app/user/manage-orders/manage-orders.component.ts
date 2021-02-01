import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

  orders;
  user;

  constructor(private orderservice: OrderService) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.getUserOrders();
  }

  getUserOrders() {
    this.orderservice.getOrderByUser(this.user._id).subscribe(data => {
      console.log(data);
      this.orders = data;
    })
  }

}
