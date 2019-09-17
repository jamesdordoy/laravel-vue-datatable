## Package Installation

```bash
composer require jamesdordoy/laravelvuedatatable
```

### Add Service Provider
```
JamesDordoy\LaravelVueDatatable\Providers\LaravelVueDatatableServiceProvider::class,
```

### Publish the Config
```
$ php artisan vendor:publish --provider="JamesDordoy\LaravelVueDatatable\Providers\LaravelVueDatatableServiceProvider"
```