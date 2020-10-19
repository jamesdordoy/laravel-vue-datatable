#### JS

> ExampleSelectCell.vue

```html
<template>
    <ul>
        <li v-for="number in data[name]" :key="number.id">
            <a href="#">{{ number.name }}</a>
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
                    label: 'Telephone Numbers',
                    name: 'telephone_numbers',
                    columnName: 'telephone_numbers.name',
                    component: ExampleSelectCell,
                    orderable: true,
                },
            ]
        }
    },
}

```
