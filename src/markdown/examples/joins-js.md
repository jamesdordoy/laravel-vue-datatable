> Datatable.vue
```html
<template>
    <data-table
        :columns="columns"
        url="http://example.test/example">
    </data-table>
</template>
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
                    label: 'Department Name',
                    name: 'department_name',
                    columnName: 'departments.name',
                    orderable: true,
                },
                {
                    label: 'Role Name',
                    name: 'role_name',
                    columnName: 'roles.name',
                    orderable: true,
                },
                {
                    label: 'Name',
                    name: 'user_name',
                    columnName: 'users.name',
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