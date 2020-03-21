[![Build Status](https://travis-ci.org/jamesdordoy/Laravel-Vue-Datatable.svg?branch=master)](https://travis-ci.org/jamesdordoy/Laravel-Vue-Datatable) [![npm](https://img.shields.io/npm/v/laravel-vue-datatable.svg)](https://www.npmjs.com/package/laravel-vue-datatable) [![Downloads](https://img.shields.io/npm/dt/laravel-vue-datatable.svg)](https://www.npmjs.com/package/laravel-vue-datatable)

# Laravel Vue Datatable
A Vue.js datatable component for Laravel that works with Bootstrap.

## Requirements

* [Vue.js](https://vuejs.org/) 2.x
* [Laravel](http://laravel.com/docs/) 5.x
* [Bootstrap](http://getbootstrap.com/) 4 (Optional)

This package makes use of an optional default component, the [Laravel Vue Pagination](https://github.com/gilbitron/laravel-vue-pagination)  component created by [gilbitron](https://github.com/gilbitron). If you need a pagination component for other areas of your website and you are using a Laravel API &amp; Bootstrap, i highly suggest using this flexible component.

## Demo & Docs

See [https://jamesdordoy.github.io/laravel-vue-datatable/](https://jamesdordoy.github.io/laravel-vue-datatable/)

## Example
![Image description](https://www.jamesdordoy.co.uk/images/projects/bootstrap-datatable.png?a=a)

## Laravel Package Installation
See details [https://github.com/jamesdordoy/Laravel-Vue-Datatable_Laravel-Package](https://github.com/jamesdordoy/Laravel-Vue-Datatable_Laravel-Package)

## Note: I am looking for co-maintainers!
If anyone has some experiance with JavaScript, Vue or PHP & Laravel i would love to get some help maintaining this package. Testing and CI is a major concern at the moment and given time, i'd much prefer to maintain this package using TypeScript.

Please email me if you would like to help maintain the package.

## Component Installation

```bash
npm install laravel-vue-datatable

or

yarn add laravel-vue-datatable
```

### Register the Plugin

```javascript
import DataTable from 'laravel-vue-datatable';

Vue.use(DataTable);
```

### Basic Example
> UserDatatable.vue


```html
<data-table
    :columns="columns"
    url="http://example.test/example">
</data-table>
```

```javascript
export default {
    data() {
        return {
            columns: [
                {
                    label: 'ID',
                    name: 'id',
                    orderable: true,
                },
                {
                    label: 'Name',
                    name: 'name',
                    orderable: true,
                },
                {
                    label: 'Email',
                    name: 'email',
                    orderable: true,
                },
            ]
        }
    },
}
```

## Reloading the table manually

If updates have been made to your dataset and you need to reload the table, you can attach a [ref](https://vuejs.org/v2/api/#vm-refs) to the table. Once the Vue.JS reference is attached, you are able to access the underlining methods of the component including the getData method.

Alternatively, if you have custom filters applied and you would prefered they are retained, any adjustment to the url the table uses as a prop will reload the table.

### API

#### Datatable Props

| Name | Type | Default | Description  
| --- | --- | --- | --- |
| `url ` | String | "/" | The JSON url |
| `columns` | Array | [] | The table columns |
| `order-by` | String | "id" | (optional) The default column to order your data by |
| `order-dir` | String | "asc" | (optional) The default order by direction |
| `per-page` | Array | ['10','25','50'] | (optional) Amount to be displayed |
| `theme` | String | "light" | (optional) Must be dark or light |
| `debounce-delay` | Number | 0 | (optional) Adds a debounce delay to the get request when searching |
| `classes` | Object | See Below | (optional) Table classes |
| `translate` | Object | { nextButton: 'Next', previousButton: 'Previous', placeholderSearch: 'Search Table'} | (optional) used to overwrite the default pagination button text and search input placeholder |
| `pagination` | Object | {}  | (optional) props for [gilbitron/laravel-vue-pagination](https://github.com/gilbitron/laravel-vue-pagination#props) |
| `add-filters-to-url` | Boolean | false | (optional) Will adjust the current url to keep track of used filters and will also store them in local storage. |

#### Default Classes

```json
{
    "table-container": {
        "table-responsive": true,
    },
    "table": {
        "table": true,
        "table-striped": true,
        "table-dark": true,
    },
    "t-head": {

    },
    "t-body": {
        
    },
    "t-head-tr": {

    },
    "t-body-tr": {
        
    },
    "td": {

    },
    "th": {
        
    },
}
```

### Column Props
| Name | Type | Default | Description  
| --- | --- | --- | --- |
| `label` | String | "" | The table column label to be displayed as the column heading |
| `name` | String | "" | The table column header name. You can also access nested properties e.g. a query using a with relationship using the dot notation. |
| `columnName` | String | "" | (optional) The backend column name if the provided data keys do not match with the backend database. It may also be required to prefix the column name with the table name e.g. users.name to avoid issues with Integrity constraint violation when joining tables |
| `width` | Number | 0 | (optional) The table column width |
| `orderable` | Boolean | false | (optional) Is the column orderable in the datatable |
| `component` | Component | null | (optional) A dynamic component that can be injected |
| `event` | String | "" | (optional) Event type to parse to the component e.g. click, focus etc. |
| `handler` | Function | () => {} | (optional) Function to parse for the event handler |
| `classes` | Object | {} | (optional) Component classes to parse |
| `meta` | Object | {} | (optional) Additional values that are parsed to component |

## Further Examples

See [https://jamesdordoy.github.io/laravel-vue-datatable/](https://jamesdordoy.github.io/laravel-vue-datatable/) for more examples.

## Development

To work on the package locally or to add to the documentation, run the following command:

```bash
npm run serve
```

To deploy documentation to GitHub under a PR. Please run the following after uncommenting the outputDir line in the vue.config.js file:

```bash
npm run build-docs
```

To run the tests:

```bash
npm run test
```