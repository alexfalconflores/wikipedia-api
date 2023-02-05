# IPage
The ```page```function returns an object that implements the ```IPage```interface, which has three properties:

- ```status```: A ```number``` indicating the status of the Wikipedia API response.
- ```title```: An optional ```string``` that represents the title of the page.
- ```content```: An optional ```string``` that represents the content of the page.

In case of an error occurring during the execution of the function, an error message is logged to the console and an object with a status of ```400```, ```undefined``` title and ```undefined```content is returned.

```typescript
export interface IPage {
	status?: number;
	title?: string;
	content?: string;
}
```
