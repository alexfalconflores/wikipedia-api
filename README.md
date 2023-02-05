<p style="text-align: center;">
	<img src="docs/assets/wikipedia.svg" alt="wikipedia logo"/>
</p>

<p style="text-align: center;">
<a href="https://github.com/alexfalconflores/wikipedia-api" title="repository"><img src="docs/assets/github-banner.svg" height="60" alt="Github: repository"></a>
<a href="https://twitter.com/falcon_stefano" title="Follow me"><img src="docs/assets/twitter-banner.svg" height="60" alt="Twitter: @falcon_stefano"></a>
</p>

# wikipedia-api
This code exports a set of functions to interact with the Wikipedia API. The functions include:

## autocomplete
Suggest Wikipedia article titles matching the input query. The function returns the ```list``` of suggestions and the ```status``` of the response.

The function accepts one parameter:

- ```query```: A ```string``` representing the search to be performed

The function uses the Fetch API to send an HTTP request to the Wikipedia API and returns the result as a JSON object. If the HTTP request returns a status other than ```200```, the function returns a response with a status of ```400``` and an ```undefined``` result.

[@IAutocomplete](docs/IAutocomplete.md)

### Example
```typescript
const autocompleteResult:IAutocomplete = await autocomplete('batman');
console.log('autocompleteResult =>', autocompleteResult);
```

## search
Search Wikipedia articles matching the input query. The function returns the search ```results```, a ```suggestion``` if available, and the ```status``` of the response.

The function accepts two parameters:

- ```query```: A ```string``` representing the search to be performed.
- ```limit```: An optional ```number``` that indicates the maximum number of results to receive. By default, this number is ```10```. The max value is ```500```.

The function uses the Fetch API to send an HTTP request to the Wikipedia API and returns the result as a JSON object. If the HTTP request returns a status other than ```200```, the function returns a response with a status of ```400``` and an ```undefined``` result.

[@ISearch](docs/ISearch.md)

### Example
```typescript
const searchResult:ISearch = await search('batman');
console.log('searchResult =>', searchResult);

const searchResult:ISearch = await search('batman', 50);
console.log('searchResult =>', searchResult);
```

## page
Retrieve information about a specific page using the REST API. The function returns the ```title```, the ```content``` of the article, and the ```status``` of the response.

The function accepts one parameter:

- ```query```: A ```string``` representing the search to be performed.

The function uses the Fetch API to send an HTTP request to the Wikipedia API and returns the result as a JSON object. If the HTTP request returns a status other than ```200```, the function returns a response with a status of ```400``` and an ```undefined``` result.

[@IPage](docs/IPage.md)
### Example
```typescript
const pageResult:IPage = await page('batman');
console.log('pageResult =>', pageResult);
```

## pageOld
Retrieve information about a specific page using the the older version of Wikipedia . The function returns the ```result``` of the page, and the ```status``` of the response.

The function accepts one parameter:

- ```query```: A ```string``` representing the title of the page you want to retrieve information about.

The function uses the Fetch API to send an HTTP request to the Wikipedia API and returns the result as a JSON object. If the HTTP request returns a status other than ```200```, the function returns a response with a status of ```400``` and an ```undefined``` result.

[@IPageOld](docs/IPageOld)
### Example
```typescript
const pageOldResult:IPageOld= await pageOld('superman');
console.log('pageOldResult =>', pageOldResult);
```

## onThisDay
Retrieve a list of events that happened ont the same day of the month. The function returns the ```list``` of events, the ```type``` of events, and the ```status``` of the response.

The function accepts three parameters:

- ```type```:```onThisDayType``` This parameter specifies the type of information to be fetched. It can be one of the following: ```'all', 'selected', 'births', 'deaths', 'events', 'holidays'```. The default value is ```'all'```.
- ```month```: ```string``` This parameter specifies the month for which the information is to be fetched. The default value is the current month.```2``` or ```02```.
- ```day```: ```string``` This parameter specifies the day for which the information is to be fetched. The default value is the current day.```2``` or ```02```.

The function uses the Fetch API to send an HTTP request to the Wikipedia API and returns the result as a JSON object. If the HTTP request returns a status other than ```200```, the function returns a response with a status of ```400``` and an ```undefined``` result.

[@IOnThisDay](docs/IOnThisDay.md)

### Example
```typescript
const onThisDayResult:IOnThisDay = await onThisDay();
console.log('onThisDayResult =>', onThisDayResult?.result);

const onThisDayResult:IOnThisDay = await onThisDay('deaths');
console.log('onThisDayResult =>', onThisDayResult?.result?.deaths);

const onThisDayResult:IOnThisDay = await onThisDay('deaths', '01', '01');
console.log('onThisDayResult =>', onThisDayResult?.result?.deaths);
```

## popup
Retrieve information about the hyperlink, The function returns an ```object``` of type ```IPopupItem``` and the ```status``` of the response.

The function accepts one parament:
- ```query```: A ```string``` representing the search to be performed.

The function uses the Fetch API to send an HTTP request to the Wikipedia API and returns the result as a JSON object. If the HTTP request returns a status other than ```200```, the function returns a response with a status of ```400``` and an ```undefined``` result.

[@IPopup](docs/IPopup.md)

### Example
```typescript
const popupResult:IPopup = await popup('batman');
console.log('popupResult =>', popupResult);
````

---

## Autor
<p style="text-align: center;">
	<img src="https://avatars.githubusercontent.com/u/75406302?v=4" height="200" style="border-radius: 50%;" alt="autor: alex falcon flores"/>
	<br>
	<a href="https://github.com/alexfalconflores" style="color: #868e96;">Alex Stefano Falcon Flores</a>
</p>
<p style="text-align: center;">
<a href="https://github.com/alexfalconflores" title="repository"><img src="docs/assets/github.svg" width="42" height="42" alt="Github: alexfalconflores"></a>
<a href="https://twitter.com/falcon_stefano" title="Follow me"><img src="docs/assets/twitter.svg" width="42" height="42" alt="Twitter: @falcon_stefano"></a>
</p>
