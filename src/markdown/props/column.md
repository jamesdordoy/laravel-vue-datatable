## Column Props
| Name | Type | Default | Description  
| --- | --- | --- | --- |
| label | String | "" | The table column label to be displayed as the column heading |
| name | String | "" | The table column header name. You can also access nested properties e.g. a query using a with relationship using the dot notation. |
| columnName | String | "" | (optional) The backend column name if the provided data keys do not match with the backend database. It may also be required to prefix the column name with the table name e.g. users.name to avoid issues with Integrity constraint violation when joining tables |
| width | Number | 0 | (optional) The table column width |
| filterable | Boolean | false | (optional) Is the column filterable |
| component | Component | null | (optional) A dynamic component that can be injected |
| event | String | "" | (optional) Event type to parse to the component e.g. click, focus etc. |
| handler | Function | () => {} | (optional) Function to parse for the event handler |
| classes | Object | {} | (optional) Component classes to parse |
| meta | Object | {} | (optional) Additional values that are parsed to component |