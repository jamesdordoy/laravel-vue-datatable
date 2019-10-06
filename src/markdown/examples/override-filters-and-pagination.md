### Pagination Changed On Datatable

```html
<data-table
    :url="url"
    :columns="columns">

    <div slot="pagination" slot-scope="{ links = {}, meta = {} }">
        <nav class="row">
            <div class="col-md-6 text-left">
                <span>
                    Showing {{meta.from}} to {{meta.to}} of {{ meta.total }} Entries
                </span>
            </div>
            <div class="col-md-6 text-right">
                <button
                    v-if="links.prev"
                    class="btn btn-primary"
                    @click="url = links.prev">
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    &nbsp;Prev
                </button>
                <button
                    v-else
                    :disabled="true"
                    class="btn btn-primary"
                    @click="url = links.prev">
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    &nbsp;Prev
                </button>
                <button
                    v-if="links.next"
                    class="btn btn-primary ml-2"
                    @click="url = links.next">
                    Next&nbsp;
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button
                    v-else
                    :disabled="true"
                    class="btn btn-primary ml-2"
                    @click="url = links.next">
                    Next&nbsp;
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
            </div>        
        </nav>
    </div>
</data-table>
```

Once the URL has been updated by your customer paginator or filters, the table will re-render. Alternatively, if updating the URL is troublesome, different table filters can be manipulated by your filters using the v-model directive:

### Filter Changed On Datatable

> (DatatableFilter.vue)

This example filter will control the length of the table manipulating the tableData.length property using v-model and will make use of a custom [select component](https://github.com/sagalbot/vue-select) to make use of predictive results.

```html
<data-table
    :url="url"
    :columns="columns">
    <div slot="filters" slot-scope="{ tableData, perPage }">
        <div class="row mb-2">
            <div class="col-md-6">
                <select class="form-control" v-model="tableData.length">
                    <option :key="page" v-for="page in perPage">{{ page }}</option>
                </select>
            </div>
            <div class="col-md-6">
                <v-select
                    label="name"
                    :options="selectOptions"
                    placeholder="Search Users"
                    @input="updateSelectedUser($event, tableData)"
                    @search="searchUsersByName">
                </v-select>
            </div>
        </div>
    </div>
</data-table>
```

```javascript
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
    data() {
        return {
            selectOptions: [],
        }
    },
    components: {
        // eslint-disable-next-line
        vSelect,
    },
    methods: {
        updateSelectedUser(row, tableData) {
            if (row) {
                tableData.search = row.name;
            } else {
                tableData.search = '';
            }
        },
        searchUsersByName(term = '') {
            axios.get(this.url + term)
                .then(response => {
                    this.selectOptions = response.data;
                });
        }
    }
}
```