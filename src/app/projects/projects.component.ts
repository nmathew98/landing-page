import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
	loading: boolean = true;
	private title: string = "naveen's blog | projects";
	@Input() animations: boolean = true;
	constructor(private titleService: Title) {}

	ngOnInit(): void {
		this.titleService.setTitle(this.title);
		this.load();
	}

	load(): void {
		this.loading = true;
		this.loading = false;
	}
}
