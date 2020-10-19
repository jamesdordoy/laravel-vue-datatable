### Example Name & Image Cell Component

> (DataTableNameAndImageCell.vue)

```html
<template>
    <div class="flex">
        <div class="flex-shrink-0 w-10 h-10">
            <img
            class="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
            alt=""
            />
        </div>
        <div class="ml-3">
            <p class="text-gray-900 whitespace-no-wrap">
            {{ data.name }}
            </p>
            <p class="text-gray-600 whitespace-no-wrap">{{ data.id|padDigit(6) }}</p>
        </div>
    </div>
</template>
```

```js
export default {
    props: {
        data: {
            type: Object,
            default: () => ({})
        }
    },
}
```

### Example Status Cell Component

> (DataTableIsActiveCell.vue)

```html
<template>
    <span :class="badgeColor" class="inline-block text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
        {{ data.is_active ? "Active" : "Inactive" }}
    </span>
</template>
```

```js
export default {
    props: {
        data: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        badgeColor() {
            return  { 
                "bg-green-200": this.data.is_active,
                "bg-red-200": !this.data.is_active
            }
        }
    }
}
```

### Example DataTable Dropdown Cell Component

> (DataTableDropdownCell.vue)

```html
<template>
    <font-awesome-icon :icon="['fas', 'ellipsis-v']" />
</template>
```

```js
export default {
    props: {
        data: {
            type: Object,
            default: () => ({})
        }
    }
}
```

### Tailwind DataTable

> (TailwindDataTable.vue)

```html
<template>
   <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
    <h2>Users</h2>
    <div class="inline-block min-w-full shadow bg-white rounded-lg overflow-hidden">
        <data-table
            v-show="!code"
            :url="url"
            :filters="filters"
            :classes="classes"
            :columns="columns"
            :per-page="[5, 10]">

            <!-- Override the top filters -->
            <div slot="filters" slot-scope="{ tableData = {}, perPage = [] }" class="flex flex-row mb-1 sm:mb-0 ml-2">
                <div class="my-2 flex sm:flex-row flex-col">
                    <div class="flex flex-row mb-1 sm:mb-0">
                        <div class="relative">
                            <select
                                v-model="tableData.length"
                                class="h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option
                                    :key="index"
                                    :value="records"
                                    v-for="(records, index) in perPage">{{records}}</option>
                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    class="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="relative">
                            <select
                                v-model="tableData.filters.isActive"
                                class="h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                <option value="">All</option>
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    class="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="block relative">
                        <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                                <path
                                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                            </svg>
                        </span>
                        <input
                            placeholder="Search"
                            v-model="tableData.search"
                            class="rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"/>
                    </div>
                </div>
            </div>

            <div
                slot="pagination"
                slot-scope="{ links = {}, meta = {} }"
                class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                <span class="text-xs xs:text-sm text-gray-900">
                    Showing {{ meta.from }} to {{ meta.to }} of {{ meta.total }} Entries                    
                </span>
                <div class="inline-flex mt-2 xs:mt-0">
                    <button
                        :disabled="!links.prev"
                        @click="url = links.prev"
                        :class="{ 'opacity-50': !links.prev, 'cursor-not-allowed': !links.prev }"
                        class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                        Prev
                    </button>
                    <button
                        :disabled="!links.next"
                        @click="url = links.next"
                        :class="{ 'opacity-50': !links.next, 'cursor-not-allowed': !links.next }"
                        class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                        Next
                    </button>
                </div>
            </div>
        </data-table>
    </div>
</div>
</template>
```

```javascript
import DataTableDropdownCell from './DataTableDropdownCell';
import DataTableIsActiveCell from './DataTableIsActiveCell';
import DataTableNameAndImageCell from './DataTableNameAndImageCell';

export default {
    data() {
        return {
            components: {
                // eslint-disable-next-line
                DataTableDropdownCell,
                // eslint-disable-next-line
                DataTableIsActiveCell,
                // eslint-disable-next-line
                DataTableNameAndImageCell,
            },
            url: 'http://example.test/example',
            columns: [
                {
                    width: 30,
                    label: 'Name',
                    name: 'name',
                    orderable: true,
                    component: DataTableNameAndImageCell
                },
                {
                    label: 'Email',
                    name: 'email',
                    orderable: true,
                },
                {
                    label: 'Role',
                    name: 'role.name',
                    columnName: "roles.name",
                    orderable: true,
                },
                {
                    label: 'Status',
                    name: 'is_active',
                    orderable: true,
                    component: DataTableIsActiveCell,
                },
                {
                    label: 'Cost',
                    name: 'cost',
                    orderable: true,
                    component: DataTableCurrencyCell,
                },
                {
                    component: DataTableDropdownCell,
                },
            ],
            filters: {
                isActive: '',
            },
            classes: { 
                'table-container': {
                    'justify-center': true,
                    'w-full': true,
                    'flex': true,
                    "border-gray-200": true,
                    'inline-block': true,
                    'min-w-full': true,
                    'rounded-lg': true,
                    'overflow-hidden': true,
                },
                table: {
                    'text-left': true,
                    'w-full': true,
                },
                "t-body": {
                    'bg-white': true,
                },
                "t-head-tr": {
                    'border-b': true,
                    'border-gray': true,
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
                    'text-gray-light': true,
                },
                "th": {
                    'text-gray-dark': true,
                    'border-gray': true,
                    'border-b-2': true,
                    'border-t-2': true,
                    'border-gray-200': true,
                    'py-3': true,
                    'px-4': true,
                    'bg-gray-100': true,
                    'text-left': true,
                    'text-xs': true,
                    'font-semibold': true,
                    'text-gray-600': true,
                    'uppercase': true,
                    'tracking-wider': true,
                },
            }
        };
    },
}
```
