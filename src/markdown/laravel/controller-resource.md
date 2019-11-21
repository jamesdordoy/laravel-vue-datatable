## Use the Controller Resource

<p class="wrap-text">
The Collection Resource is expecting a paginated collection, so feel free to use your own queries and omit the provided query if your require more complex filtering.
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
        $column = $request->input('column');
        $orderBy = $request->input('dir');
        $searchValue = $request->input('search');
        
        $query = User::eloquentQuery($column, $orderBy, $searchValue);
        $data = $query->paginate($length);
        
        return new DataTableCollectionResource($data);
    }
}
```

## Using Laravels Query Builder

<p class="wrap-text">
For more complex filtering, it is suggested to use the query builder as you are able to make cross table queries and searches in only a single call to the database. You can add your own joins to the query to add additional data but you will have to reselect the data you want and as previous filters have been applied by the default searching, please use the orWhere function to apply additional filters as using where will clear the previously set search filters.
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
        $column = $request->input('column');
        $orderBy = $request->input('dir');
        $searchValue = $request->input('search');
        
        $query = User::queryBuilderQuery($column, $orderBy, $searchValue);

        $query
            ->join('roles', 'roles.id', '=', 'users.role_id')
            ->select(
                'roles.name as role_name',
                'users.id',
                'users.cost',
                'users.name as user_name',
                'users.email'
            )
            ->orWhere('roles.name', "LIKE", "%$searchValue%");

        $data = $query->paginate($length);
        
        return new DataTableCollectionResource($data);
    }
}
```