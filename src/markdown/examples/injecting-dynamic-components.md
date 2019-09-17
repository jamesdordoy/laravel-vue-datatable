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
        click: () => {},
        meta: {},
        classes: {},
    }
}
```

### Dynamic Datatable Columns

> (UserDatatable.vue)

```javascript

import ExampleButton './ExampleButton.vue';

export default {
    data() {
        return {
            url: 'http://vue-datatable.test/ajax',
            perPage: ['10', '25', '50'],
            columns: [
            {
                label: 'ID',
                name: 'id',
                filterable: true,
            },
            {
                label: 'Name',
                 name: 'name',
                filterable: true,
            },
            {
                label: 'Email',
                name: 'email',
                filterable: true,
            }
            {
                label: '',
                name: 'View',
                filterable: false,
                component: ExampleButton,
                event: "click",
                handler: this.displayRow,
                classes: { 
                    'btn': true,
                    'btn-primary': true,
                    'btn-sm': true,
                },
                meta: {
                    'foo': 'bar',
                }
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
        }
    },
}
```
