## Use the Controller Resource

<p class="wrap-text">
The Collection Resource is expecting a paginated collection, so feel free to use your own queries and omit the provided trait query if your require more complex filtering.
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
        $sortBy = $request->input('column');
        $orderBy = $request->input('dir');
        $searchValue = $request->input('search');
        
        $query = User::eloquentQuery($sortBy, $orderBy, $searchValue);

        $data = $query->paginate($length);
        
        return new DataTableCollectionResource($data);
    }
}
```