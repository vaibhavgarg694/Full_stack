import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private sidebarservice: NbSidebarService, public userservice: UserService) { }

  ngOnInit(): void {
  }

  toggleCompact() {
    this.sidebarservice.toggle(true, 'right');
  }

}
