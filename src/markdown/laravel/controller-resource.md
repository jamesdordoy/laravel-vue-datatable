### Use the Controller Resource

<p class="wrap-text">
The Collection Resource is expecting a paginated collection, so feel free to use your own queries if your require more complex filtering.
</p>

```php
<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use JamesDordoy\LaravelVueDatatable\Http\Resources\DataTableCollectionResource;

class UserController extends Controller
{
    public function index(Request $request)
    {   
        $length = $request->input('length');
        $column = $request->input('column'); //Index
        $orderBy = $request->input('dir', 'asc');
        $searchValue = $request->input('search');
        
        $query = User::dataTableQuery($column, $orderBy, $searchValue);
        $data = $query->paginate($length);
        
        return new DataTableCollectionResource($data);
    }
}
```