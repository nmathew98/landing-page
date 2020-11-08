import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
	private title: string = "naveen's blog | contact";

	constructor(private titleService: Title) {}

	ngOnInit(): void {
		this.titleService.setTitle(this.title);
	}
}
