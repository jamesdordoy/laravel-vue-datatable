<template>
    <div>
        <div class="modal modal-active fade show" id="exampleModal" tabindex="-1"
             role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{row.name}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('hideModal')">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {{row.email}}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="$emit('hideModal')">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal-backdrop fade show"></div>
    </div>
</template>
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