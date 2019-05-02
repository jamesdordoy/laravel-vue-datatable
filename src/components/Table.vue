<template>
    <div class="table-responsive">
        <table class="table table-striped table-dark">
            <thead class="">
                <tr class="">
                    <th v-for="column in columns" :key="column.name" @click="$emit('sort', column.name)"
                        scope="col"
                        :class="'p-3 w-25 text-left ' + (12 / columns.length)"
                        class="">
                        <i class="fa fa-sort" aria-hidden="true"></i>
                        {{column.label}}
                    </th>
                </tr>
            </thead>
            <slot></slot>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        columns: {
            type: Array,
            default: () => ([])
        },
        sortKey: {
            type: String,
            default: ''
        },
        sortOrders :{
            type: Object,
            default: () => ({})
        }
    }
}
</script>

<style scoped>
th {
    cursor: pointer;
}
</style>
