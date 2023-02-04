import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;

  constructor() { }

  showFiller = false;
  
  ngOnInit(): void {
    console.log(this.drawer);
  }

}
