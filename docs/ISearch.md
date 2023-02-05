## ISearch
The ```search``` function returns an object that implements the ```ISearch``` interface, which has three properties:

- ```status```: A ```number``` indicating the status of the Wikipedia API response.
- ```suggestion```: An optional ```string``` representing a search suggestion if available.
- ```results```: An ```array```of type ```ISearchItem``` than containing the search results, where each element represents a Wikipedia article.

In case of an error occurring during the execution of the function, an error message is logged to the console and an object with a status of ```400``` and ```undefined``` results is returned.

```typescript
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
```



