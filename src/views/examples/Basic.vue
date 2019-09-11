<template>
<div>
<label>
    Show Code
    <input type="checkbox" v-model="code">
</label>
<vue-markdown :html="true" v-if="code">
> UserDatatable.vue

``` javascript
&lt;template&gt;
    &lt;data-table
        url="http://vue-datatable.test/ajax"
        :per-page="perPage"
        :columns="columns"&gt;
    &lt;/data-table&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data() {
        return {
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
                },
                {
                    label: '',
                    name: 'View',
                    filterable: false,
                },
            ]
        }
    },
}
&lt;/script&gt;
```
</vue-markdown>

<data-table
    v-else
    :url="url"
    :filters="filters"
    :columns="columns"
    :add-filters-to-url="true"
    :per-page="perPage"
    :pagination="pagination">
    <span slot="filters" slot-scope="{ tableData, perPage }">
        <data-table-filters
            :table-data="tableData"
            :per-page="perPage">
        </data-table-filters>
    </span>
    <tbody slot="body" slot-scope="{ data }">
        <tr
            :key="item.id"
            v-for="item in data">
            <td 
                :key="column.name"
                v-for="column in columns">
                <data-table-cell
                    :value="item"
                    :name="column.name"
                    :meta="column.meta"
                    :event="column.event"
                    :handler="column.handler"
                    :comp="column.component"
                    :classes="column.classes">
                </data-table-cell>
            </td>
        </tr>
    </tbody>
</data-table>
</div>
</template>

<style scoped>
code {
    background: #fff;
    display: block !important;
}
</style>

<script>
    import Prism from 'prismjs';
    import Filters from '../../components/Filters.vue';
    import DataTable from '../../components/DataTable.vue';
    import Pagination from '../../components/Pagination.vue';
    import DataTableFilters from '../../components/DataTableFilters.vue';
    import DataTableCell from '../../components/DataTableCell.vue';
    import DataTableButtonCell from '../../components/generic/DataTableButtonCell.vue';
    import DataTableAnchorCell from '../../components/generic/DataTableAnchorCell.vue';
    import DataTableDateCell from '../../components/generic/DataTableDateCell.vue';

    export default {
        name: 'home',
        data() {
            return {
                code: true,
                url: process.env.VUE_APP_DATATABLE_URL,
                perPage: ['10', '25', '50'],
                columns: [
                    {
                        label: 'ID',
                        name: 'id',
                        filterable: true,
                        width: 10,
                    },
                    {
                        label: 'Name',
                        name: 'name',
                        filterable: true,
                        width: 20,
                    },
                    {
                        label: 'Email',
                        name: 'email',
                        filterable: true,
                        component: DataTableAnchorCell,
                        width: 20,
                    },
                    {
                        label: 'Created On',
                        name: 'created_at',
                        filterable: true,
                        component: DataTableDateCell,
                        width: 20,                        
                    },
                    {
                        label: 'Last Updated',
                        name: 'updated_at',
                        filterable: true,
                        component: DataTableDateCell,
                        width: 20,
                    },
                    {
                        label: '',
                        name: 'View',
                        filterable: false,
                        event: "click",
                        handler: this.alertMe,
                        component: DataTableButtonCell,
                        meta: {
                            foo: "bar"
                        },
                        classes: { 
                            'btn': true,
                            'btn-primary': true,
                            'btn-sm': true,
                        },
                        width: 10,
                    },
                ],
                filters: {
                    isAdmin: '',
                },
                pagination:{
                    limit: 1,
                    align: "right",
                    size: "small"
                }
            }
        },
        mounted() {
            this.initHighlight();
        },
        methods: {
            updateUrl(url) {
                this.url = url;
            },
            alertMe(data) {
                alert("You have clicked ID: " + data.id);
            },
            initHighlight(block, cls) {
                try {
                    if (cls.search(/\bno\-highlight\b/) != -1)
                    return process(block, true, 0x0F) +
                            ` class="${cls}"`;
                } catch (e) {
                    /* handle exception */
                }
                for (var i = 0 / 2; i < classes.length; i++) {
                    if (checkCondition(classes[i]) === undefined)
                    console.log('undefined');
                }
            }
        },
        components: {
            // eslint-disable-next-line
            DataTableButtonCell,
            // eslint-disable-next-line
            DataTableAnchorCell,
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            Pagination,
            // eslint-disable-next-line
            Filters,
            // eslint-disable-next-line
            DataTableFilters,
            // eslint-disable-next-line
            DataTableCell,
        }
    }
</script>
