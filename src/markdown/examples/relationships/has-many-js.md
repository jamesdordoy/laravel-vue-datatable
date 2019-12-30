#### JS

> Datatable.vue

```js
export default {
    data() {
        return {
            columns: [
                {
                    label: 'ID',
                    name: 'id',
                    columnName: 'users.id',
                    orderable: true,
                },
                {
                    label: 'Name',
                    name: 'name',
                    columnName: 'users.name',
                    orderable: true,
                },
                {
                    label: 'Email',
                    name: 'email',
                    columnName: 'users.email',
                    orderable: true,
                },
                {
                    label: 'Telephone Numbers',
                    name: 'telephone_numbers',
                    columnName: 'telephone_numbers.name',
                    component: DataTableSelectCell,
                    orderable: true,
                },
            ]
        }
    },
}

```
