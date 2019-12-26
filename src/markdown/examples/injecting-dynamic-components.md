### Example Button Component

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
            }
            {
                label: '',
                name: 'View',
                orderable: false,
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
