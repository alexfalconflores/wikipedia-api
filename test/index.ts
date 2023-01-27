import {
	autocomplete,
	onThisDay,
	page,
	pageOld,
	popup,
	search,
} from 'index';

const searchResult = await search('batman');
console.log('searchResult =>', searchResult);

const pageOldResult = await pageOld('superman');
console.log('pageOldResult =>', pageOldResult);

const pageResult = await page('batman');
console.log('pageResult =>', pageResult);

const autocompleteResult = await autocomplete('batman');
console.log('autocompleteResult =>', autocompleteResult);

const onThisDayResult = await onThisDay('all');
console.log('onThisDayResult =>', onThisDayResult?.result?.deaths);

const popupResult = await popup('batman');
console.log('popupResult =>', popupResult);
