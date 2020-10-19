#### PHP

> Add the relationship to your model

```php
<?php
 
protected $dataTableRelationships = [
    "hasMany" => [
        'telephoneNumbers' => [
            "model" => \App\TelephoneNumber::class,
            'foreign_key' => 'user_id',
            'columns' => [
                'name' => [
                    'searchable' => true,
                    'orderable' => true,
                ],
            ],
        ],
    ],
];

public function telephoneNumbers()
{
    return $this->hasMany(\App\TelephoneNumber::class);
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
                "telephoneNumbers",
            ]
        );
        
        $data = $query->paginate($request->input('length'));

        return new DataTableCollectionResource($data);
    }
}
```