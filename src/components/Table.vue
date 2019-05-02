<template>
    <div class="table-responsive">
        <table class="table table-striped table-dark">
            <thead class="">
                <tr class="">
                    <th
                        class=""
                        scope="col"
                        :key="column.name"
                        v-for="column in columns"
                        @click="$emit('sort', column.name)"
                        :class="'p-3 w-25 text-left ' + (12 / columns.length)">
                        <i class="fa fa-sort" aria-hidden="true"></i>
                        {{ column.label }}
                    </th>
                </tr>
            </thead>
            <slot>
            </slot>
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
