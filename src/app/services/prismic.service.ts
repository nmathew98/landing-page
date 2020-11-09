import { Injectable } from '@angular/core';
import * as Prismic from 'prismic-javascript';

@Injectable({
	providedIn: 'root',
})
export class PrismicService {
	constructor() {}

	async query(repository_name: string, predicates: any[], orderings: string): Promise<any> {
		let result = [];

		await Prismic.default
			.getApi(`https://${repository_name}.prismic.io/api/v2`)
			.then(function (api) {
				return api.query(predicates, { orderings: `${orderings}` });
			})
			.then(
				function (response) {
					result = response.results;
				},
				function (err) {
					console.log('Something went wrong: ', err);
				}
			);

		return result;
	}

	async queryByUID(repository_name: string, type: string, uid: string): Promise<any> {
		let result = {};
		await Prismic.default
			.getApi(`https://${repository_name}.prismic.io/api/v2`)
			.then(function (api) {
				return api.getByUID(type, uid);
			})
			.then(
				function (response) {
					result = response;
				},
				function (err) {
					console.log('Something went wrong: ', err);
				}
			);

		return result;
	}
}
