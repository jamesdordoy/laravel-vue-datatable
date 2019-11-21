## Column Props
| Name | Type | Default | Description  
| --- | --- | --- | --- |
| label | String | "" | The table column label to be displayed as the column heading |
| name | String | "" | The table column header name. You can also access nested properties e.g. a query using a with relationship using the dot notation. |
| columnName | String | "" | The backend column name if the provided data keys do not match with the backend database. It may also be required to prefix the column name with the table name e.g. users.name to avoid issues with Integrity constraint violation when joining tables |
| width | Number | 0 | The table column width |
| filterable | Boolean | false | Is the column filterable |
| component | Component | null | A dynamic component that can be injected |
| classes | Object | {} | Component classes to parse |
| event | String | "" | Event type to parse to the component e.g. click, focus etc. |
| handler | Function | () => {} | Function to parse for the event handler |
| classes | Object | {} | Component classes to parse |
| meta | Object | {} | Additional values that are parsed to component |