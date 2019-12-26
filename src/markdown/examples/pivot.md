Laravel - PHP
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
        $searchValue = $request->input('search');
        $orderBy = $request->input('column', 'id');
        $orderByDir = $request->input('dir');
        $length = $request->input('length');

        $query = User::eloquentQuery(
            $orderBy,
            $orderByDir,
            $searchValue
        );

        if ($searchValue) {
            $query = $query->whereHas('roles', function ($q) use ($searchValue) {
                $q->orWhere('roles.name', "like",  "%$searchValue%");
            });
        }
        
        $data = $query->with('roles')->paginate($length);

        return new DataTableCollectionResource($data);
    }
}
```

Javascript
```js
export default {
    components: {
        // eslint-disable-next-line
        DataTableListCell,
    },
    data() {
        return {
            columns: [
                {
                    label: 'ID',
                    name: 'id',
                    orderable: true,
                },
                {
                    label: 'Name',
                    name: 'name',
                    orderable: true,
                },
                {
                    label: 'Email',
                    name: 'email',
                    orderable: true,
                },
                {
                    label: 'Roles',
                    name: 'roles',
                    orderable: false,
                    component: DataTableListCell,
                },
            ]
        }
    },
}
```

```html
<template>
    <ul>
        <li v-for="role in data.roles" :key="role.id">
            <a href="#">{{ role.name }}</a>
        </li>
    </ul>
</template>

<style scoped>
li {
    padding: 4px;
    margin: 0;
}

ul {
    margin:0;
    padding:0;
}
</style>
```

```js
export default {
    props: {
        data: {},
    },
}
```
