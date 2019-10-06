## Datatable Props
| Name | Type | Default | Description  
| --- | --- | --- | --- |
| url | String | "/" | The JSON url |
| columns | Array | [] | The table columns |
| per-page | Array | ['10','25','50'] | (optional) Amount to be displayed |
| add-filters-to-url | Boolean | false | <p class="wrap-text"> (optional) Will adjust the current url to keep track of used filters and will also store them in local storage. </p> |
| classes | Object | See Below | (optional) Table classes |
| pagination | Object | {}  | (optional) props for [gilbitron/laravel-vue-pagination](https://github.com/gilbitron/laravel-vue-pagination#props) |

<br>

#### Default Classes
```json
{
    "table-container": {
        "table-responsive": true,
    },
    "table": {
        "table": true,
        "table-striped": true,
        "table-dark": true,
    },
    "t-head": {

    },
    "t-body": {
        
    },
    "t-head-tr": {

    },
    "t-body-tr": {
        
    },
    "td": {

    },
    "th": {
        
    },
}
```
