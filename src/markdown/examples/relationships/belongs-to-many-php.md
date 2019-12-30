#### PHP

> Add the relationship to your model

```php
<?php
 
protected $dataTableRelationships = [
    "belongsToMany" => [
        'departments' => [
            "model" => \App\Department::class,
            "foreign_key" => "role_id",
            "pivot" => [
                "table_name" => "department_user",
                "primary_key" => "id",
                "foreign_key" => "department_id",
                "local_key" => "user_id",
            ],
            "subOrder" => [
                "order_by" => "departments.name",
                "order_dir" => "asc",
            ],
            'columns' => [
                'name' => [
                    'searchable' => true,
                    'orderable' => true,
                ]
            ],
        ],
    ],
];

public function departments()
{
    return $this->belongsToMany(\App\Department::class, 'department_user', 'user_id', 'department_id');
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
                "departments"
            ]
        );
        
        $data = $query->paginate($request->input('length'));

        return new DataTableCollectionResource($data);
    }
}
```