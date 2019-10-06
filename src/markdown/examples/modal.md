> Modal.vue
``` html
<template>
    <div class="modal" id="exampleModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ row.name }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>This rows email address is: {{ row.email }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>
```

``` javascript
<script>
export default {
    props: {
        row: {
            type: Object,
            default: () => ({}),
        }
    }
}
</script>
```
<hr>

> ModalButton.vue
```html
<template>
    <button
        type="button"
        data-toggle="modal"
        @click="click(data)"
        class="btn btn-primary btn-sm"
        data-target="#exampleModal">
        View Row {{ data.id }} Modal
    </button>
</template>
```

``` javascript
<script>
export default {
    props: {
        data: {},
        name: {},
        click: {},
        meta: {},
        classes: {},
    },
}
</script>
```
<hr>

> Datatable.vue
```html
<template>
    <data-table
        :columns="columns"
        url="http://example.test/example">
    </data-table>
    <modal
        :row="selectedRow">
    </modal>
</template>
```

```javascript
<script>

import Modal from './MyModal';
import ModalButton from './MyModalButton';

export default {
    components: {
        // eslint-disable-next-line
        Modal,
        // eslint-disable-next-line
        ModalButton,
    },
    data() {
        return {
            columns: [
                {
                    label: 'ID',
                    name: 'id',
                    filterable: true,
                },
                {
                    label: 'Name',
                    name: 'name',
                    filterable: true,
                },
                {
                    label: 'Email',
                    name: 'email',
                    filterable: true,
                },
                {
                    label: 'View',
                    name: '',
                    filterable: false,
                    component: ModalButton,
                    event: "click",
                    handler: this.updateSelectedModal,
                }, 
            ],
            selectedRow: {},
        }
    },
    methods: {
        updateSelectedModal(data) {
            this.selectedRow = data;
        }
    }
}
</script>
```
