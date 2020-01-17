### Example Name & Image Cell Component

> (DataTableNameAndImageCell.vue)

```html
<template>
    <div>
        <img class="rounded-lg float-left pr-2" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d.jpg?s=40">
        {{ data.name }}
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
   <data-table
        :url="url"
        :classes="classes"
        :columns="columns"
        :per-page="[5, 10]">

        <!-- Override the top filters -->
        <div slot="filters" class="flex" slot-scope="{ tableData }">
            <div class="w-1/3">
                <input
                    type="text"
                    placeholder="Search..."
                    v-model="tableData.search"
                    class="block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
            </div>
        </div>

        <!-- Override the bottom pagination -->
        <div slot="pagination" class="flex py-4 px-3 border-gray border" slot-scope="{ links = {}, meta = {} }">

            <div class="w-1/2 text-left">
                <span>
                    Showing {{ meta.from }} to {{ meta.to }} of {{ meta.total }} Entries
                </span>
            </div>

            <div class="w-1/2 text-right">
                <button
                    :disabled="!links.prev"
                    @click="url = links.prev"
                    :class="{ 'opacity-50': !links.prev, 'cursor-not-allowed': !links.prev }"
                    class="bg-blue-500 text-white font-bold py-1 px-3 rounded mr-2">
                    Prev
                </button>
                <button
                    :disabled="!links.next"
                    @click="url = links.next"
                    :class="{ 'opacity-50': !links.next, 'cursor-not-allowed': !links.next }"
                    class="bg-blue-500 text-white font-bold py-1 px-3 rounded">
                    Next
                </button>
            </div>
        </div>
    </data-table>
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
                    label: '',
                    component: DataTableDropdownCell,
                },
            ],
            classes: { 
                'table-container': {
                    'justify-center': true,
                    'w-full': true,
                    'flex': true,
                    'rounded': true,
                    "border-gray-200": true,
                },
                table: {
                    'text-left': true,
                    'w-full': true,
                    'border': true,
                    "border-gray-200": true,
                },
                't-head': {
                    'text-gray-dark': true,
                    'border-gray': true,
                    'py-3': true,
                    'px-3': true,
                    'bg-gray-100': true,
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
        },
    },
}
```
