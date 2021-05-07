import { Component, OnInit, ViewChild } from '@angular/core';
import { dataService} from '../../services/data.service';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './sideNav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @ViewChild('sidenav', {static: true}) sideNav: MatSidenav;
  
  constructor(public dataService: dataService,private sideNavService: SidenavService) {
  }

  ngOnInit(): void {
    this.sideNavService.setSideNav(this.sideNav);
  }

}
