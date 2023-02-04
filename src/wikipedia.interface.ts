export interface ISearch {
	status?: number;
	suggestion?: string | null;
	results?: ISearchItem[];
}

export interface ISearchItem {
	ns: number;
	title: string;
	pageid: number;
	size: number;
	wordcount: number;
	snippet: string;
	timestamp: string;
}

export interface IPageOld {
	status?: number;
	result?: IPageOldItem;
}

export interface IPageOldItem {
	pageid: number;
	ns: number;
	title: string;
	extract: string;
}

export interface IPage {
	status?: number;
	title?: string;
	content?: string;
}

export interface IAutocomplete {
	status?: number;
	result?: string[];
}

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

export interface IPopup{
	status?: number;
	result?: IPopupItem;
}

export interface IPopupItem{
	title?: string;
	extract?: string;
	thumbnail?: IImage;
}

export type onThisDayType =
| 'all'
| 'selected'
| 'births'
| 'deaths'
| 'events'
| 'holidays';

