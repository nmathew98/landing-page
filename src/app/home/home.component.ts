import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	loading: boolean = true;
	animations: boolean = true;
	showContact: boolean = false;
	constructor(private cookieService: CookieService) {}

	ngOnInit(): void {
		this.load();
		// Set a cookie if person has visited before
		this.cookieService.set('visited', '1');
	}

	ngAfterViewInit() {
		// Turn off animations once view is initialized
		this.animations = !this.cookieService.check('visited');
	}

	load() {
		this.loading = true;
		// Animations on each reload gets annoying quick
		if (this.cookieService.check('visited') === true) {
			this.animations = false;
		}
		this.loading = false;
	}

	toggleContact() {
		this.showContact = !this.showContact;
	}
}
