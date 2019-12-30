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
                    label: 'Role',
                    name: 'role.name',
                    columnName: 'roles.name',
                    orderable: true,
                },
            ]
        }
    },
}

```
