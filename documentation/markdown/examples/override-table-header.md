```html
<template>
    <data-table
        :columns="columns"
        url="http://example.test/example">
        <thead slot="header" slot-scope="{ tableProps }">
            <tr>
                <th class="text-center" colspan="3">List</th>
            </tr>
            <tr>
                <th @click="sort('id', tableProps)">ID</th>
                <th @click="sort('name', tableProps)">Name</th>
                <th @click="sort('email', tableProps)">Email</th>
            </tr>
        </thead>
    </data-table>
</template>
```

```js
export default {
    data() {
        return {
            sortOrders: {},
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
    mounted() {
        this.columns.forEach((column) => {
            this.sortOrders[column.name] = -1;
        });
    },
    methods: {
        sort(key, tableProps) {
            tableProps.column = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
            tableProps.dir =  this.sortOrders[key] === 1 ? 'desc' : 'asc';
        }
    }
}
```