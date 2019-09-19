```html

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
```
```js
export default {
    name: 'Override-Table-Body',
    data() {
        return {
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