<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <h2 class="markdown-header">Modal Example</h2>
            </div>
            <div class="col-md-4 relative">
                <div class="show-code-inline">
                    <label>Show Example Code</label>&nbsp;
                    <vue-switch></vue-switch>
                </div>
            </div>
        </div>

        <pre v-highlightjs v-show="code">
            <modal-markdown>
            </modal-markdown>
        </pre>
        
        <data-table
            v-show="!code"
            :url="url"
            :columns="columns">
        </data-table>
        <modal
            :row="selectedRow">
        </modal>        
    </div>
</template>

<script>

    import CodeExample from '../../mixins/CodeExample';
    import Modal from '../../example-components/Modal';
    import DataTable from '@/components/DataTable.vue';
    import VueSwitch from '../../example-components/Switch';
    import ModalMarkdown from '../../markdown/examples/modal.md';
    import ModalButton from '../../example-components/ModalButton';
    
    export default {
        name: 'Modal-Example',
        components: {
            // eslint-disable-next-line
            Modal,
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            VueSwitch,
            // eslint-disable-next-line
            ModalMarkdown,
            // eslint-disable-next-line
            ModalButton,
        },
        mixins: [CodeExample],
        data() {
            return {
                url: process.env.VUE_APP_ELOQUENT_URL,
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
                    {
                        label: 'View',
                        name: 'view',
                        orderable: false,
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
