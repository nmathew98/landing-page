import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { DocService } from '../services/doc.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	loading: boolean = true;
	private animations: boolean = true;
	private title: string = "naveen's blog";
	showContact: boolean = false;

	constructor(private cookieService: CookieService, private titleService: Title) {}

	ngOnInit(): void {
		this.titleService.setTitle(this.title);
		this.load();
	}

	ngAfterViewInit() {
		// Turn off animations once view is initialized
		this.animations = !this.cookieService.check('visited');
		this.cookieService.set('visited', '1');
	}

	load(): void {
		this.loading = true;
		// Animations on each reload gets annoying quick
		if (this.cookieService.check('visited') === true) {
			this.animations = false;
		}
		setTimeout(function () {
			this.loading = false;
		}, 3000);
	}

	toggleContact(): void {
		this.showContact = !this.showContact;
	}
}
