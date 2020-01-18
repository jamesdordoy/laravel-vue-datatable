```html
<template>
    <div>
        <data-table
            v-show="!code"
            :url="url"
            :columns="columns"
            @loading="isLoading = true"
            @finishedLoading="isLoading = false">
        </data-table>
        <loading
            :is-full-page="true"
            :active.sync="isLoading">
        </loading>
    </div>
</template>
```

```javascript
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    data() {
        return {
            isLoading: false,
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
            ]
        }
    },
}
```
