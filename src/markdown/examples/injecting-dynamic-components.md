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
        click: {
            type: Function,
            default: () => {}
        },
        classes: {
            type: Object,
            default: () => ({ 
                'btn': true,
                'btn-primary': true,
                'btn-sm': true,
            }),
        },
    }
}
```

### Example Image Component

> (ExampleImageComponent.vue)

```html
<template>
    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d.jpg?s=60">
</template>
```

```javascript
export default {
    props: {
        data: {}
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
import ExampleImageComponent './ExampleImageComponent.vue';

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
            },
            {
                label: 'Profile Image',
                name: 'img',
                orderable: true,
                component: ExampleImageComponent,
            },
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
