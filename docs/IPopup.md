## IPopup
The ```popup``` function returns an object that implements the ```IPopup``` interface, which has three properties:

- ```status```: A ```number```indicating the status of the Wikipedia API response.
- ```result```: A object of type ```IPopupItem```than containing the result. The object contains the following properties:
  > The thumbnail property is likely to return undefined because not all have a thumbnail.
  - ```title```: An optional ```string```  that represents the title of the popup.
  - ```extract```: An optional ```string``` that represents the summary of the popup.
  - ```thumbnail```An optional ```object``` of type ```IImage```that represents the image of the popup (Probably a Thumbnail Image).

In case of an error occurring during the execution of the function, an error message is logged to the console and an object with a status of ```400``` and ```undefined``` results is returned.

```typescript
export interface IPopup{
	status?: number;
	result?: IPopupItem;
}

export interface IPopupItem{
	title?: string;
	extract?: string;
	thumbnail?: IImage;
}

export interface IImage {
	source?: string;
	width?: number;
	height?: number;
}
```
