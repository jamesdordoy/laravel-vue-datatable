```html
<template>
    <data-table
        :data="data"
        :columns="columns"
        @onTablePropsChanged="reloadTable">
    </data-table>
</template>
```

```javascript
export default {
    data() {
        return {
            url: "http://example.test",
            data: {},
            tableProps: {
                search: '',
                length: 10,
            },
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
            ]
        }
    },
    created() {
        this.getData(this.url);
    },
    methods: {
        getData(url = this.url, options = this.tableProps) {
            axios.get(url, {
                params: options
            })
            .then(response => {
                this.data = response.data;
            })
            // eslint-disable-next-line
            .catch(errors => {
                //Handle Errors
            })
        },
        reloadTable(tableProps) {
            this.getData(this.url, tableProps);
        }
    }
}
```
