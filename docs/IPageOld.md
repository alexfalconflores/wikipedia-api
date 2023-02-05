# IPageOld

The ```pageOld``` function returns an object that implements the ```IPageOld``` interface, which has two properties:

- ```status```: A ```number``` indicating the status of the Wikipedia API response.
- ```results```: An ```array```of type ```IPageOldItem``` than containing information about the request page.

In case of an error occurring during the execution of the function, an error message is logged to the console and an object with a status of ```400``` and ```undefined``` results is returned.

```typescript
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
```
