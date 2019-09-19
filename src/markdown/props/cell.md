## Cell Props
| Name | Type | Default | Description  
| --- | --- | --- | --- |
| name | String | "" | The column name |
| value | Object | {} | The table row |
| meta | Object | {} | Additional values that are parsed to cell |
| comp | Component |  | A dynamic component that can be injected |
| event | String | "" | Event type to parse to the component e.g. click, focus etc. |
| handler | Function | () => {} | Function to parse for the event handler |
| classes | Object | {} | Cell classes to parse |