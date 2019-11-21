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
<script>

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
                    label: 'Department Name',
                    name: 'department_name',
                    columnName: 'departments.name',
                    filterable: true,
                },
                {
                    label: 'Role Name',
                    name: 'role_name',
                    columnName: 'roles.name',
                    filterable: true,
                },
                {
                    label: 'Name',
                    name: 'user_name',
                    columnName: 'users.name',
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
</script>
```