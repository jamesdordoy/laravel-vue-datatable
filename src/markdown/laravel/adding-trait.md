## Use the Trait

<p class="wrap-text">
This trait is optional and simply provides a basic method for filtering your data based on the $dataTableColumns attribute set in the model. If you would like more control on how the data is filtered, feel free to omit this trait use your own filtering methods. Just remember to paginate the results!
</p>

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
            'searchable' => false,
        ],
        'name' => [
            'searchable' => true,
        ],
        'email' => [
            'searchable' => true,
        ]
    ];
}
```