import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: NbMenuItem[] = [
    {
      title: 'Profile',
      expanded: true,
      children: [
        {
          title: 'Change Password',
        },
        {
          title: 'Privacy Policy',
        },
        {
          title: 'Logout',
        },
      ],
    },
    {
      title: 'Shopping Bag',
    },
    {
      title: 'Orders',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
