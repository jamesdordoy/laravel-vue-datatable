> Add relationships to model

```php
<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use JamesDordoy\LaravelVueDatatable\Traits\LaravelVueDatatableTrait;

class User extends Authenticatable
{
    use Notifiable, LaravelVueDatatableTrait;

    protected $dataTableColumns = [
        'id' => [
            'searchable' => true,
            'orderable' => true,
        ],
        'name' => [
            'searchable' => true,
            'orderable' => true,
        ],
        'email' => [
            'searchable' => true,
            'orderable' => true,
        ],
    ];

    protected $dataTableRelationships = [
        "belongsTo" => [
            ...
        ],
        "hasMany" => [
            ...
        ],
        "belongsToMany" => [
            ...
        ]
    ];
}

```

> BelongsTo

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
```

> HasMany

```php
<?php

protected $dataTableRelationships = [
    "hasMany" => [
        'telephone_numbers' => [
            "model" => \App\TelephoneNumber::class,
            'foreign_key' => 'user_id',
            'columns' => [
                'value' => [
                    'searchable' => true,
                    'orderable' => true,
                ],
            ],
        ],
    ],
];
```

> BelongsToMany

```php
<?php

protected $dataTableRelationships = [
    "belongsToMany" => [
        'roles' => [
            "model" => \App\Role::class,
            "foreign_key" => "role_id",
            "pivot" => [
                "table_name" => "role_user",
                "primary_key" => "id",
                "foreign_key" => "role_id",
                "local_key" => "user_id",
            ],
            "subOrder" => [
                "order_by" => "roles.name",
                "order_dir" => "asc",
            ],
            'columns' => [
                'name' => [
                    'searchable' => true,
                    'orderable' => true,
                ]
            ],
        ],
    ]
];
```