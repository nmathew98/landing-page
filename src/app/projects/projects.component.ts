import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DocService } from '../services/doc.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
	loading: boolean = true;
	projects: any;
	private title: string = "naveen's blog | projects";
	@Input() animations: boolean = true;

	constructor(private titleService: Title, private docService: DocService) {}

	ngOnInit(): void {
		this.titleService.setTitle(this.title);
		this.load();
	}

	async load(): Promise<void> {
		this.loading = true;
		this.projects = await this.docService.fetchProjects();
		console.log(this.projects);
		console.log(this.projects[0].data.project_name[0].text);
		this.loading = false;
	}
}
