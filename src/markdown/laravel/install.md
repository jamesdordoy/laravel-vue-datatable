## Package Installation

```bash
composer require jamesdordoy/laravelvuedatatable
```
<br>

## Add Service Provider
Add the following line to your \config\app.php

```
JamesDordoy\LaravelVueDatatable\Providers\LaravelVueDatatableServiceProvider::class,
```
<br>

## Publish the Config
```
php artisan vendor:publish --provider="JamesDordoy\LaravelVueDatatable\Providers\LaravelVueDatatableServiceProvider"
```