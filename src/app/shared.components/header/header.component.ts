import { Component, OnInit } from '@angular/core';
import { dataService} from '../../services/data.service';
import { SidenavService } from 'src/app/shared.components/side-nav/sideNav.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dataService: dataService,private sideNavService: SidenavService) { }

  ngOnInit(): void {
  }

  toggleSideNav() {
		this.sideNavService.toggle();
  }
  
}
