<template>
    <div class="container modal-vue">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <data-table :columns="columns" :url="url"></data-table>
            </div>
        </div>

        <example-modal v-if="showModal" @hideModal="showModal = false" :row="selectedRow"></example-modal>

    </div>
</template>

<script>
    import DataTable from './src/components/DataTable';
    import ExampleButton from './ExampleButton.vue';
    import ExampleModal from "./ExampleModal";

    export default {
        components: {ExampleModal, DataTable, ExampleButton},
        props: {url: {type: String}, deleteUserRoute: {type: String}, showUserRoute: {type: String},},
        data() {
            return {
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
                        label: 'action',
                        orderable: false,
                        components: [
                            {
                                name: 'show',
                                classes: {
                                    button: {
                                        'btn': true,
                                        'btn-warning': true,
                                        'btn-sm': true,
                                        'btn-block': true
                                    },
                                    icon: {
                                        'fa': true,
                                        'fa-eye': true
                                    }
                                },
                                href: this.showUserRoute,
                                component: ExampleButton,
                            },
                            {
                                name: 'edit',
                                classes: {
                                    button: {
                                        'btn': true,
                                        'btn-success': true,
                                        'btn-sm': true,
                                        'btn-block': true
                                    },
                                    icon: {
                                        'fa': true,
                                        'fa-pencil': true
                                    }
                                },
                                emit: true,
                                event: "click",
                                handler: this.updateSelectedModal,
                                component: ExampleButton,
                            },
                            {
                                name: 'delete',
                                classes: {
                                    button: {
                                        'btn': true,
                                        'btn-danger': true,
                                        'btn-sm': true,
                                        'btn-block': true
                                    },
                                    icon: {
                                        'far': true,
                                        'fa-trash': true
                                    }
                                },
                                method: 'delete',
                                href: this.deleteUserRoute,
                                component: ExampleButton,
                            }
                        ]
                    },
                ],
                selectedRow: false,
                showModal: false
            }
        },
        methods: {
            updateSelectedModal(data) {
                console.log(data)
                this.selectedRow = data;
                this.showModal = true;
            },
        },
    }
</script>

<style>
    .modal-active {
        display: block;
    }
</style>
