> config/database.php - MySQL example

```php
'strict' => false,

or add

'modes' => [
    'STRICT_ALL_TABLES',
    'ERROR_FOR_DIVISION_BY_ZERO',
    'NO_ZERO_DATE',
    'NO_ZERO_IN_DATE',
    'NO_AUTO_CREATE_USER',
],
```