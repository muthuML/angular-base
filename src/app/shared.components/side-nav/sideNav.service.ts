import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable()
export class SidenavService {
	private sideNav: MatSidenav;

	public setSideNav(sideNav: MatSidenav) {
		this.sideNav = sideNav;
	}

	public open() {
		return this.sideNav.open();
	}


	public close() {
		return this.sideNav.close();
	}

	public toggle() {
		return this.sideNav.toggle();
	}

	public getSideNavStatus(){
		return this.sideNav.opened;
	}
}