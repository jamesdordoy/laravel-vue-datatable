#### JS

> ExampleSelectCell.vue

```html
<template>
    <ul>
        <li v-for="department in data[name]" :key="department.id">
            <a href="#">{{ department.name }}</a>
        </li>
    </ul>
</template>
```

```js
export default {
    props: {
        data: {},
        name: {}
    },
}
```

> Datatable.vue

```js
import ExampleSelectCell from './ExampleSelectCell';

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
                    label: 'Departments',
                    name: 'departments',
                    columnName: 'departments.name',
                    component: ExampleSelectCell,
                    orderable: true,
                },
            ]
        }
    },
}

```
