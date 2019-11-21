## Cell Props
| Name | Type | Default | Description  
| --- | --- | --- | --- |
| name | String | "" | The column name |
| value | Object | {} | The table row |
| meta | Object | {} | (optional) Additional values that are parsed to cell |
| comp | Component |  | (optional) A dynamic component that can be injected |
| event | String | "" | (optional) Event type to parse to the component e.g. click, focus etc. |
| handler | Function | () => {} | (optional) Function to parse for the event handler |
| classes | Object | {} | (optional) Cell classes to parse |