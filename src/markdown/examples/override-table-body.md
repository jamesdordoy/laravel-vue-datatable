```html
<template>
    <data-table
        :columns="columns"
        url="http://example.test/example">
        <tbody slot="body" slot-scope="{ data }">
            <tr
                :key="item.id"
                @click="showRowNumber(item.id)"
                v-for="item in data">
                <td 
                    :key="column.name"
                    v-for="column in columns">
                    <data-table-cell
                        :value="item"
                        :name="column.name"
                        :meta="column.meta"
                        :comp="column.component"
                        :classes="column.classes">
                    </data-table-cell>
                </td>
            </tr>
        </tbody>
    </data-table>
</template>
```

```js
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
            ]
        }
    },
    methods: {
        showRowNumber(id) {
            alert(`you clicked row ${id}`);
        }
    }
}
```