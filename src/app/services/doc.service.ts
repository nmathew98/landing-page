import { Injectable } from '@angular/core';
import * as Prismic from 'prismic-javascript';
import { PrismicService } from './prismic.service';

@Injectable({
	providedIn: 'root',
})
export class DocService {
	/* Prismic Information */
	private repository_name = 'naveensblog';
	private content_type = 'projects';

	constructor(private prismicService: PrismicService) {}

	async fetchProjects(): Promise<any> {
		let predicates = [Prismic.default.Predicates.at('document.type', this.content_type)];
		return this.prismicService.query(this.repository_name, predicates, '[document.first_publication_date]');
	}
}
