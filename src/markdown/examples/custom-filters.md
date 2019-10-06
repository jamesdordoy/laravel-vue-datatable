### Datatable

``` html
<data-table
    :url="url"
    :filters="filters"
    :columns="columns">
    <div slot="filters" slot-scope="{ tableData, perPage }">
        <div class="row mb-2">
            <div class="col-md-4">
                <select class="form-control" v-model="tableData.length">
                    <option :key="page" v-for="page in perPage">{{ page }}</option>
                </select>
            </div>
            <div class="col-md-4">
                <select
                    v-model="tableData.filters.isAdmin"
                    class="form-control">
                    <option value>All</option>
                    <option value='admin'>Admin</option>
                    <option value='staff'>Staff</option>
                </select>
            </div>
            <div class="col-md-4">
                <input
                    name="name"
                    class="form-control"
                    v-model="tableData.search"
                    placeholder="Search Table">
            </div>
        </div>
    </div>
</data-table>
```

``` javascript
data() {
    return {
        url: "http://example.test",
        columns: [
        	...
        ],
        filters: {
            isAdmin: '',
        },
    }
},
```

This added isAdmin filter for staff type will be send to the Laravel backend and can be used to manipulate the results:

```php
$isAdmin = $request->input('isAdmin');

$query = User::dataTableQuery($column, $dir, $length, $searchValue);
        
if (isset($isAdmin) && ! empty($isAdmin)) {
    $query->where("type", $isAdmin);
}
    
$data = $query->paginate($length);

return new DataTableCollectionResource($data);
```