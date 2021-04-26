import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  listMenu : any[];

  constructor(private sidebar_ : SidebarService) {
    this.listMenu = this.sidebar_.lisyMenu;
  }

  ngOnInit(): void {
  }

}
