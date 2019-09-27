### Datatable

```javascript
data() {
    return {
        url: "/url",
        columns: [
        	...
        ],
        filters: {
            isAdmin: '',
        },
    }
},
```

```html
<data-table
    :url="url"
    :filters="filters"
    :columns="columns"
    :per-page="perPage"
    :pagination="pagination">
    <span slot="filters" slot-scope="{ tableData, perPage }">
        <data-table-filters
            :table-data="tableData"
            :per-page="perPage">
        </data-table-filters>
    </span>
</data-table>
```

### Example Filter

```html

<div class="row mb-3">
    <div class="col-md-3">
        <select
            v-model="tableData.length"
            class="form-control">
            <option
                :key="index"
                :value="records"
                v-for="(records, index) in perPage">
                {{records}}
            </option>
        </select>
    </div>
    <div class="col-md-3">
        <select
            v-model="tableData.filters.isAdmin"
            class="form-control">
            <option value>All Staff</option>
            <option value='admin'>Admin</option>
            <option value='staff'>Staff</option>
        </select>
    </div>
    <div class="col-md-3 offset-md-3">
        <input
            name="name"
            class="form-control"
            v-model="tableData.search"
            placeholder="Search Table">
    </div>
</div>

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
