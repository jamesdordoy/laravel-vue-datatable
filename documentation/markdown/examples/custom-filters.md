### Datatable

```html
<data-table
    :url="url"
    :filters="filters"
    :columns="columns">
    <div slot="filters" slot-scope="{ tableFilters, perPage }">
        <div class="row mb-2">
            <div class="col-md-4">
                <select class="form-control" v-model="tableFilters.length">
                    <option :key="page" v-for="page in perPage">{{ page }}</option>
                </select>
            </div>
            <div class="col-md-4">
                <select
                    v-model="tableFilters.filters.isActive"
                    class="form-control">
                    <option value>All</option>
                    <option value='1'>Active</option>
                    <option value='0'>Inactive</option>
                </select>
            </div>
            <div class="col-md-4">
                <input
                    name="name"
                    class="form-control"
                    v-model="tableFilters.search"
                    placeholder="Search Table">
            </div>
        </div>
    </div>
</data-table>
```

```javascript
data() {
    return {
        url: "http://example.test",
        columns: [
        	...
        ],
        filters: {
            isActive: '',
        },
    }
},
```

This added `isActive` filter will be send to the Laravel backend and can be used to manipulate the results:

```php
$query = User::eloquentQuery(
    $request->input('column'),
    $request->input('dir'),
    $request->input('search')
);

$isActive = $request->input('isActive');

if (isset($isActive)) {
    $query->where("is_active", $isActive);
}

$data = $query->paginate($request->input('length'));

return new DataTableCollectionResource($data);
```