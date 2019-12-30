#### PHP

> Add the relationship to your model

```php
<?php
 
protected $dataTableRelationships = [
    "belongsTo" => [
        'role' => [
            "model" => \App\Role::class,
            'foreign_key' => 'role_id',
            'columns' => [
                'name' => [
                    'searchable' => true,
                    'orderable' => true,
                ],
            ],
        ],
    ],
];

public function role()
{
    return $this->belongsTo(\App\Role::class);
}
```

> Attach the relationship to the query

```php
<?php

use App\User;
use Illuminate\Http\Request;
use JamesDordoy\LaravelVueDatatable\Http\Resources\DataTableCollectionResource;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $query = User::eloquentQuery(
            $request->input('column'),
            $request->input('dir'),
            $request->input('search'),
            [
                "role",
            ]
        );
        
        $data = $query->paginate($request->input('length'));

        return new DataTableCollectionResource($data);
    }
}
```