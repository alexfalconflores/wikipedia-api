## IOnThisDay
The ```onThisDay``` function returns an object that implements the ```IOnThisDay``` interface, which has two properties:

- ```status```: A ```number``` indicating the status of the Wikipedia API response.
- ```results```: An object of type ```IOnThisDayItem``` with information about the ```events, births, deaths, holidays, or selected``` events on the specified ```day``` and ```month```. The object contains the following properties:
  > events, births, deaths, holidays, or selected all make use of the ```IOnThisDayItemCategory``` interface
  - ```births```:An array of objects that describe births that have taken place on the specified day.
  - ```deaths```: An array of objects that describe deaths that have taken place on the specified day.
  - ```events```: An array of objects that describe events that have taken place on the specified day.
  - ```holidays```: An array of objects that describe holidays that have taken place on the specified day.
  - ```selected```: An array of objects that describe selected items that have taken place on the specified day.

In case of an error occurring during the execution of the function, an error message is logged to the console and an object with a status of ```400``` and ```undefined``` results is returned.

```typescript
export type onThisDayType =
| 'all'
| 'selected'
| 'births'
| 'deaths'
| 'events'
| 'holidays';

export interface IOnThisDay {
	status?: number;
	result?: IOnThisDayItem;
}

export interface IOnThisDayItem {
	births?: IOnThisDayItemCategory[];
	deaths?: IOnThisDayItemCategory[];
	events?: IOnThisDayItemCategory[];
	holidays?: IOnThisDayItemCategory[];
	selected?: IOnThisDayItemCategory[];
}

export interface IOnThisDayItemCategory {
	text?: string;
	pages?: IOnThisDayItemCategoryPage[];
	year?: number;
}

export interface IOnThisDayItemCategoryPage {
	type?: string;
	title?: string;
	displaytitle?: string;
	namespace?: IOnThisDayPagesNamespace;
	wikibase_item?: string;
	titles?: IOnThisDayPagesTitle;
	pageid?: number;
	thumbnail?: IImage;
	originalimage?: IImage;
	lang?: string;
	dir?: string;
	revision?: string;
	tid?: string;
	timestamp?: string;
	description?: string;
	description_source?: string;
	coordinates?: IOnThisDayPagesCoordinates;
	content_urls?: IOnThisDayPagesContentUrl;
	extract?: string;
	extract_html?: string;
	normalizedtitle?: string;
}

export interface IOnThisDayPagesNamespace {
	id?: number;
	text?: string;
}

export interface IOnThisDayPagesTitle {
	canonical?: string;
	normalized?: string;
	display?: string;
}

export interface IImage {
	source?: string;
	width?: number;
	height?: number;
}

export interface IOnThisDayPagesCoordinates {
	lat?: number;
	lon?: number;
}

export interface IOnThisDayPagesContentUrl {
	desktop?: IOnThisDayPagesContentUrlItem;
	mobile?: IOnThisDayPagesContentUrlItem;
}

export interface IOnThisDayPagesContentUrlItem {
	page?: string;
	revisions?: string;
	edit?: string;
	talk?: string;
}
```
