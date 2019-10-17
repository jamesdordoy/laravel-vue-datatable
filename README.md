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
See details [https://github.com/jamesdordoy/Laravel-Vue-Datatable_Laravel-Package](https://github.com/jamesdordoy/Laravel-Vue-Datatable_Laravel-Package)

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
| `order-by` | String | "id" | (optional) The default column to order your data by |
| `order-dir` | String | "asc" | (optional) The default order by direction |
| `per-page` | Array | ['10','25','50'] | (optional) Amount to be displayed |
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
| `name` | String | "" | The table column header name. You can also access nested properties e.g. a query using a with relationship using the dot notation. |
| `width` | Number | 0 | The table column width |
| `filterable` | Boolean | false | Is the column filterable |
| `component` | Component | null | A dynamic component that can be injected |
| `classes` | Object | {} | Component classes to parse |
| `event` | String | "" | Event type to parse to the component e.g. click, focus etc. |
| `handler` | Function | () => {} | Function to parse for the event handler |
| `classes` | Object | {} | Component classes to parse |
| `meta` | Object | {} | Additional values that are parsed to component |


## Reloading the table manually


If updates have been made to your dataset and you need to reload the table, you can attach a (ref)[] to the table. Once the Vue.JS reference is attached, you are able to access the underlining methods of the component including the getData method.

Alterativly, if you have custom filters applied and you would prefered they are reatained, any adjustment to the url the table is mapped to will reload the table.

## Injecting Components
You can also inject your own components into the table such as buttons. Your buttons, links etc can also listen for events. After declaring your event type and setting a handler. You can accept the event type as you would expect in your component, e.g. `click` for click events.

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
        click: {},
        meta: {},
        classes: {},
    }
}
```

### Datatable Button Example

> (UserDatatable.vue)

``` html
<template>
    <data-table
        :columns="columns"
        url="http://example.test/example">
    </data-table>
</template>
```

```javascript
import ExampleButton './ExampleButton.vue';

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
            }
            {
                label: '',
                name: 'View',
                filterable: false,
                classes: { 
                    'btn': true,
                    'btn-primary': true,
                    'btn-sm': true,
                },
                event: "click",
                handler: this.displayRow,
                component: ExampleButton, 
            },
            ]
        }
    },
    components: {
        // eslint-disable-next-line
        ExampleButton,
    },
    methods: {
        displayRow(data) {
            alert(`You clicked row ${data.id}`);
        },
    },
}
```

## Overriding the Filters and Pagination Components
If the included pagination or filters do not meet your requirements or if the styling is incorrect, they can be over-written using scoped slots.

### Pagination Changed On Datatable

```html
<data-table
    :url="url"
    :columns="columns">
    <div slot="pagination" slot-scope="{ links = {}, meta = {} }">
        <nav class="row">
            <div class="col-md-6 text-left">
                <span>
                    Showing {{meta.from}} to {{meta.to}} of {{ meta.total }} Entries
                </span>
            </div>
            <div class="col-md-6 text-right">
                <button
                    v-if="links.prev"
                    class="btn btn-primary"
                    @click="url = links.prev">
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    &nbsp;Prev
                </button>
                <button
                    v-else
                    :disabled="true"
                    class="btn btn-primary"
                    @click="url = links.prev">
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    &nbsp;Prev
                </button>
                <button
                    v-if="links.next"
                    class="btn btn-primary ml-2"
                    @click="url = links.next">
                    Next&nbsp;
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button
                    v-else
                    :disabled="true"
                    class="btn btn-primary ml-2"
                    @click="url = links.next">
                    Next&nbsp;
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
            </div>        
        </nav>
    </div>
</data-table>
```

Once the URL has been updated by your customer paginator or filters, the table will re-render. Alternatively, if updating the URL is troublesome, different table filters can be manipulated by your filters using the v-model directive:

### Filter Changed On Datatable

> (DatatableFilter.vue)

This example filter will control the length of the table manipulating the tableData.length property using v-model and will make use of a custom [select component](https://github.com/sagalbot/vue-select) to make use of predictive results.

```html
<data-table
    :url="url"
    :columns="columns">
    <div slot="filters" slot-scope="{ tableData, perPage }">
        <div class="row mb-2">
            <div class="col-md-6">
                <select class="form-control" v-model="tableData.length">
                    <option :key="page" v-for="page in perPage">{{ page }}</option>
                </select>
            </div>
            <div class="col-md-6">
                <v-select
                    label="name"
                    :options="selectOptions"
                    placeholder="Search Users"
                    @input="updateSelectedUser($event, tableData)"
                    @search="searchUsersByName">
                </v-select>
            </div>
        </div>
    </div>
</data-table>
```

```javascript
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
    data() {
        return {
            selectOptions: [],
        }
    },
    components: {
        // eslint-disable-next-line
        vSelect,
    },
    methods: {
        updateSelectedUser(row, tableData) {
            if (row) {
                tableData.search = row.name;
            } else {
                tableData.search = '';
            }
        },
        searchUsersByName(term = '') {
            axios.get(this.url + term)
                .then(response => {
                    this.selectOptions = response.data;
                });
        }
    }
}
```

## Custom Filters
You can also add your own custom filters to be sent to the Laravel backend:

### Datatable

``` html
<data-table
    :url="url"
    :filters="filters"
    :columns="columns">
    <div slot="filters" slot-scope="{ tableData, perPage }">
        <div class="row mb-2">
            <div class="col-md-4">
                <select class="form-control" v-model="tableData.length">
                    <option :key="page" v-for="page in perPage">{{ page }}</option>
                </select>
            </div>
            <div class="col-md-4">
                <select
                    v-model="tableData.filters.isAdmin"
                    class="form-control">
                    <option value>All</option>
                    <option value='admin'>Admin</option>
                    <option value='staff'>Staff</option>
                </select>
            </div>
            <div class="col-md-4">
                <input
                    name="name"
                    class="form-control"
                    v-model="tableData.search"
                    placeholder="Search Table">
            </div>
        </div>
    </div>
</data-table>
```

``` javascript
data() {
    return {
        url: "http://example.test",
        columns: [
        	...
        ],
        filters: {
            isAdmin: '',
        },
    }
},
```

This added isAdmin filter for staff type will be send to the Laravel backend and can be used to manipulate the results:

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