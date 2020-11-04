## HTML

```html
<template>
    <data-table
        :columns="columns"
        url="http://example.test/example">
    </data-table>
</template>
```

## Javascript
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
                    label: 'Name',
                    name: 'name',
                    orderable: true,
                },
                {
                    label: 'Cost (&pound;)',
                    name: 'cost',
                    orderable: true,
                    transform: ({data, name}) => `&pound;${data[name]}`,
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
