import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-merchandise',
  templateUrl: './list-merchandise.component.html',
  styleUrls: ['./list-merchandise.component.css']
})
export class ListMerchandiseComponent implements OnInit {

  merchs = [
    { name: 'Collar T-Shirt', price: 1299, image: 't-shirt', link: 'collar-t-shirt' },
    { name: 'Dualshock Controller', price: 4999, image: 'dualshock', link: 'dualshock' },
    // { name: 'Hoody', price: 1999, image: 'Hoody', link: 'hoody' },
    { name: 'Face Mask', price: 199, image: 'mask', link: 'mask' },
    // { name: 'Sports Shoes', price: 2399, image: 'Shoes', link: 'Shoes' },
    { name: 'Coffee Mug', price: 799, image: 'mug', link: 'mug' }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectMerch(merch) {
    sessionStorage.setItem('selectedMerch', JSON.stringify(merch));
    this.router.navigate(['/app/customize', merch.link]);
  }

}
