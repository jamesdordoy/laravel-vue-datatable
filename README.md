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

## Package Installation
See details [https://github.com/jamesdordoy/Laravel-Vue-Datatable_Laravel-Package](https://github.com/jamesdordoy/Laravel-Vue-Datatable_Laravel-Packages)

## Component Installation

```bash
$ npm install laravel-vue-datatable

or

$ yarn add laravel-vue-datatable
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
                    filterable: true,
                },
                {
                    label: 'Name',
                    name: 'name',
                    filterable: true,
                },
                {
                    label: 'Email',
                    name: 'email',
                    filterable: true,
                },
            ]
        }
    },
}
```

### API

#### Datatable Props

| Name | Type | Default | Description  
| --- | --- | --- | --- |
| `url ` | String | "/" | The JSON url |
| `columns` | Array | [] | The table columns |
| `per-page` | Array | [ '10', '25', '50' ] | (optional) Amount to be displayed |
| `add-filters-to-url` | Boolean | false | (optional) Will adjust the current url to keep track of used filters and will also store them in local storage. |
| `classes` | Object | See Below | (optional) Table classes |
| `pagination` | Object | {}  | (optional) props for [gilbitron/laravel-vue-pagination](https://github.com/gilbitron/laravel-vue-pagination#props) |

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

#### Column Props
| Name | Type | Default | Description  
| --- | --- | --- | --- |
| `label ` | String | "" | The JSON url |
| `name` | String | "" | The table column header name |
| `width` | Number | 0 | The table column width |
| `filterable` | Boolean | false | Is the column filterable |
| `component` | Component | null | A dynamic component that can be injected |
| `classes` | Object | {} | Component classes to parse |
| `event` | String | "" | Event type to parse to the component e.g. click, focus etc. |
| `handler` | Function | () => {} | Function to parse for the event handler |
| `classes` | Object | {} | Component classes to parse |
| `meta` | Object | {} | Additional values that are parsed to component |


## Using Dynamic Components
You can also inject your own components into the table such as buttons. Your buttons, links etc can also listen for events. After declaring your event type and setting a handler. You can accept the event type as you would expect in your component, e.g. `click` for click events.

### Example Button Component

> (ExampleButton.vue)

```html
<template>
    <button :class="classes" @click="click(data)" title="Update">
        <span>
            <i class="fa fa-eye" aria-hidden="true"></i>
        </span>
        &nbsp;
        {{ name }}
    </button>
</template>
```

```javascript
export default {
    props: {
        data: {},
        name: {},
        click: () => {},
        meta: {},
        classes: {},
    }
}
```

### Dynamic Datatable Columns

> (UserDatatable.vue)

```javascript

import ExampleButton './ExampleButton.vue';

export default {
    data() {
        return {
            url: 'http://vue-datatable.test/ajax',
            perPage: ['10', '25', '50'],
            columns: [
            {
                label: 'ID',
                name: 'id',
                filterable: true,
            },
            {
                label: 'Name',
                 name: 'name',
                filterable: true,
            },
            {
                label: 'Email',
                name: 'email',
                filterable: true,
            }
            {
                label: '',
                name: 'View',
                filterable: false,
                component: ExampleButton,
                event: "click",
                handler: this.alertMe,
                classes: { 
                    'btn': true,
                    'btn-primary': true,
                    'btn-sm': true,
                },
                meta: {
                    'foo': 'bar',
                }
            },
            ]
        }
    },
    components: {
        // eslint-disable-next-line
        ExampleButton,
    },
    methods: {
        alertMe(data) {
            alert("hey");
        }
    },
}
```

## Overriding the Filters and Pagination Components
If the included pagination or filters do not meet your requirements or if the styling is incorrect, they can be over-written using scoped slots.

### Paginatior Datatable

```html
<data-table
    :url="url"
    :columns="columns"
    :per-page="perPage">

    <span slot="pagination" slot-scope="{ links, meta }">
        <paginator 
            :meta="meta"
            :links="links"
            @next="updateUrl"
            @prev="updateUrl">
        </paginator>
    </span>
</data-table>
```

Once the URL has been updated by your customer paginator or filters, the table will re-render. Alternatively, if updating the URL is troublesome, different table filters can be manipulated by your filters using the v-model directive:

### Example Filter

> (DatatableFilter.vue)

This example filter will control the length of the table manipulating the tableData.length property using v-model.

```html
<template>
    <select
        class="form-control"
        v-model="tableData.length">
        <option
            :key="index"
            :value="records"
            v-for="(records, index) in perPage">
            {{ records }}
        </option>
    </select>
</template>
```

```javascript
export default {
    props: [
        "tableData", "perPage"
    ]
}
```

### Filter Datatable

```html
<data-table
    :url="url"
    :columns="columns"
    :per-page="perPage">

    <span slot="filters" slot-scope="{ tableData, perPage }">
        <data-table-filters
            :per-page="perPage"
            :table-data="tableData">
        </data-table-filters>
    </span>
</data-table>
```

## Custom Filters
You can also add your own custom filters to be sent to the Laravel backend:

### Datatable

```javascript
data() {
    return {
        url: "/url",
        perPage: ['10', '25', '50'],
        columns: [
        	...
        ],
        filters: {
            isAdmin: '',
        },
        pagination:{
            limit: 1,
            align: "right",
            size: "small"
        }
    }
},
```

```html
<data-table
    :url="url"
    :filters="filters"
    :columns="columns"
    :per-page="perPage"
    :pagination="pagination">
    <span slot="filters" slot-scope="{ tableData, perPage }">
        <data-table-filters
            :table-data="tableData"
            :per-page="perPage">
        </data-table-filters>
    </span>
</data-table>
```

### Example Filter

```html

<div class="row mb-3">
    <div class="col-md-3">
        <select
            v-model="tableData.length"
            class="form-control">
            <option
                :key="index"
                :value="records"
                v-for="(records, index) in perPage">
                {{records}}
            </option>
        </select>
    </div>
    <div class="col-md-3">
        <select
            v-model="tableData.filters.isAdmin"
            class="form-control">
            <option value>All Staff</option>
            <option value='admin'>Admin</option>
            <option value='staff'>Staff</option>
        </select>
    </div>
    <div class="col-md-3 offset-md-3">
        <input
            name="name"
            class="form-control"
            v-model="tableData.search"
            placeholder="Search Table">
    </div>
</div>

```
This added "isAdmin" filter for staff type will be send to the Laravel backend and can be used to manipulate the results:

```php

$isAdmin = $request->input('isAdmin');

$query = User::dataTableQuery($column, $dir, $length, $searchValue);
        
if (isset($isAdmin) && ! empty($isAdmin)) {
    $query->where("type", $isAdmin);
}
    
$data = $query->paginate($length);

return new DataTableCollectionResource($data);

```

## Overriding the Datatable body
If you want more control over the rendered table rows, you can use the `body` slot to override the default table HTML.

```html

<tbody slot="body" slot-scope="{ data }">
    <tr
        :key="item.id"
        v-for="item in data">
        <td 
            :key="column.name"
            v-for="column in columns">
            <data-table-cell
                :value="item"
                :name="column.name"
                :meta="column.meta"
                :event="column.event"
                :handler="column.handler"
                :comp="column.component"
                :classes="column.classes">
            </data-table-cell>
        </td>
    </tr>
</tbody>

```


## Styling the Datatable
You can edit the style of the Datatable by overriding the `classes` prop. A example mixin config can be found be below for Tailwind:

![Image description](https://www.jamesdordoy.co.uk/images/projects/tailwind-datatable.png)

### Tailwind Config

> (mixins/tailwind.js)

Custom Class

```css
  .stripped-table:nth-child(even) {
    @apply bg-black;
  }
```

```javascript
export default {
    data() {
        return {
            classes: { 
                'table-container': {
                    'justify-center': true,
                    'w-full': true,
                    'flex': true,
                    'rounded': true,
                    'mb-6': true,
                    'shadow-md': true,
                },
                table: {
                    'text-left': true,
                    'w-full': true,
                    'border-collapse': true,
                },
                't-head': {
                    'text-grey-dark': true,
                    'bg-black': true,
                    'border-grey-light': true,
                    'py-4': true,
                    'px-6': true,
                },
                "t-body": {
                    'bg-grey-darkest': true,
                    
                },
                "t-head-tr": {
                    
                },
                "t-body-tr": {
                    'stripped-table': true,
                    'bg-grey-darkest': true,
                },
                "td": {
                    'py-4': true,
                    'px-6': true,
                    'border-b': true,
                    'border-grey-light': true,
                    'text-grey-light': true,
                },
                "th": {
                    'py-4': true,
                    'px-6': true,
                    'font-bold': true,
                    'uppercase': true,
                    'text-sm': true,
                    'text-grey-dark': true,
                    'border-b': true,
                    'border-grey-light': true,
                },
            }
        };
    },
}
```

### Tailwind Datatable

```html
<data-table
    :url="url"
    :columns="columns"
    :classes="classes"
    :per-page="perPage">
    <span slot="filters" slot-scope="{ tableData, perPage }">
        <data-table-filters
            :table-data="tableData"
            :per-page="perPage">
        </data-table-filters>
    </span>

    <span slot="pagination" slot-scope="{ links, meta }">
        <paginator 
            @next="updateUrl"
            @prev="updateUrl"
            :meta="meta"
            :links="links">
        </paginator>
    </span>
</data-table>
```

```javascript

import TailwindDatatable from '../mixins/tailwind.js';

export default {
    data() {
        return {
            url: 'http://vue-datatable.test/ajax',
            perPage: ['10', '25', '50'],
            columns: [
            {
                label: 'ID',
                name: 'id',
                filterable: true,
            },
            {
                label: 'Name',
                 name: 'name',
                filterable: true,
            },
            {
                label: 'Email',
                name: 'email',
                filterable: true,
            }
            ]
        }
    },
	mixins: [
		TailwindDatatable
	]
}
```

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