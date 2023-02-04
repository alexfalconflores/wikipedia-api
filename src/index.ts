import {
	IAutocomplete,
	IOnThisDay,
	IOnThisDayItem,
	IPage,
	IPageOld,
	IPopup,
	IPopupItem,
	ISearch,
	onThisDayType
} from 'wikipedia.interface';

const OLD_WIKIPEDIA_URL = 'https://en.wikipedia.org/w/api.php';
const NEW_WIKIPEDIA_URL = 'https://en.wikipedia.org/api/rest_v1/';

async function search(query: string, limit = 10): Promise<ISearch> {
	try {
		const maxResults = Math.min(limit, 500);
		const url = `${OLD_WIKIPEDIA_URL}?action=query&list=search&srsearch=${query}&srlimit=${maxResults}&sroffset=${0}&format=json&origin=*`;
		const response = await fetch(url);
		const { status } = response;
		if (status !== 200) {
			// throw new Error('Error fetching data');
			return { status, suggestion: undefined, results: undefined };
		}
		const data = await response.json();
		const {
			query: { searchinfo: searchInfo, search },
		} = data;
		const suggestion = searchInfo?.suggestion ?? null;
		const newData: ISearch = {
			status,
			suggestion,
			results: search,
		};
		return newData;
	} catch (error) {
		console.error('Error =>', error);
		return { status: 400, suggestion: undefined, results: undefined };
	}
}

async function pageOld(query: string): Promise<IPageOld> {
	try {
		const url = `${OLD_WIKIPEDIA_URL}?action=query&prop=extracts&format=json&exintro=&titles=${query}`;
		const response = await fetch(url);
		const { status } = response;
		if (status !== 200) {
			// throw new Error('Error fetching data');
			return { status, result: undefined };
		}
		const data = await response.json();
		const pages = data.query.pages;
		const newData: IPageOld = {
			status,
			result: pages[Object.keys(pages)[0]],
		};
		return newData;
	} catch (error) {
		console.error('Error =>', error);
		return { status: 400, result: undefined };
	}
}

async function page(query: string): Promise<IPage> {
	try {
		const url = `${NEW_WIKIPEDIA_URL}page/segments/${query}`;
		const response = await fetch(url);
		const { status } = response;
		if (status !== 200) {
			// throw new Error('Error fetching data');
			return { status, title: undefined, content: undefined };
		}
		const data = await response.json();
		const { title, segmentedContent: content } = data;
		const newData: IPage = {
			status,
			title,
			content,
		};
		return newData;
	} catch (error) {
		console.error('Error =>', error);
		return { status: 400, title: undefined, content: undefined };
	}
}

async function autocomplete(query: string): Promise<IAutocomplete> {
	try {
		const url = `${OLD_WIKIPEDIA_URL}?action=opensearch&search=${query}&format=json&origin=*`;
		const response = await fetch(url);
		const { status } = response;
		if (status !== 200) {
			// throw new Error('Error fetching data');
			return { status, result: undefined };
		}
		const data = await response.json();
		const result: string[] = data[1].length > 0 ? data[1] : undefined;
		const newData: IAutocomplete = {
			status,
			result,
		};
		return newData;
	} catch (error) {
		console.error('Error =>', error);
		return { status: 400, result: undefined };
	}
}

async function onThisDay(
	type: onThisDayType = 'all',
	month: string | null = null,
	day: string | null = null,
): Promise<IOnThisDay> {
	try {
		const now = Date.now();
		const today = new Date(now);
		month ??= (today.getMonth() + 1).toLocaleString(undefined, {
			minimumIntegerDigits: 2,
		});
		day ??= today
			.getDate()
			.toLocaleString(undefined, { minimumIntegerDigits: 2 });
		const url = `${NEW_WIKIPEDIA_URL}feed/onthisday/${type}/${month}/${day}`;
		const response = await fetch(url);
		const { status } = response;
		const data: IOnThisDayItem = await response.json();
		const newData: IOnThisDay = {
			status,
			result: data,
		};
		return newData;
	} catch (error) {
		console.error('Error =>', error);
		return { status: 400, result: undefined };
	}
}

async function popup(query: string) {
	try {
		const url = `${NEW_WIKIPEDIA_URL}page/summary/${query}?redirect=false`;
		const response = await fetch(url);
		const { status } = response;
		if (status !== 200) {
			// throw new Error('Error fetching data');
			return { status, result: undefined };
		}
		const data: IPopupItem = await response.json();
		const newData: IPopup = {
			status,
			result: data,
		};
		return newData;
	} catch (error) {
		console.error('Error =>', error);
		return { status: 400, result: undefined };
	}
}

export { search, pageOld, page, autocomplete, onThisDay, popup };
module.exports = { search, pageOld, page, autocomplete, onThisDay, popup };
export * from './wikipedia.interface';
