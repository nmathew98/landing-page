import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
	loading: boolean = true;
	@Input() animations: boolean = true;
	constructor() {}

	ngOnInit(): void {
		this.load();
	}

	load() {
		this.loading = true;
		this.loading = false;
	}
}
