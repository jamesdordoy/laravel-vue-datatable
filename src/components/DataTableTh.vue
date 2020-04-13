<template>
    <th
        scope="col"
        :key="column.name"
        :class="headerClasses(column)"
        class="laravel-vue-datatable-th"
        :style="'width: ' + column.width + '%'"
        @click="column.orderable  ? sort(column) : null">
        <div style="display: inline-block;" v-if="column.orderable">
            <div v-if="thIconClasses.asc"
                 :class="column.orderable && column.name == sortKey && dir == 'asc' ? thIconClasses.asc : null">
            </div>
            <div v-else
                 class="filter-asc"
                 style="
                    width: 0;
                    height: 0;
                    margin-bottom: 1px;
                    border-bottom: 5px solid #ccc;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;"
                 :class="{'active-filter-asc': column.orderable && column.name == sortKey && dir == 'asc' }"
                 :style="{borderBottom: column.orderable && column.name == sortKey && dir == 'asc' ? '5px solid #a3a3a3' : '5px solid #ccc' }">
            </div>

            <div v-if="thIconClasses.desc"
                 :class="column.orderable && column.name == sortKey && dir == 'desc' ? thIconClasses.desc : null">
            </div>

            <div v-else
                 class="filter-desc"
                 style="
                    width: 0;
                    height: 0;
                    margin-top: 1px;
                    border-top: 5px solid #ccc;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;"
                 :class="{'active-filter-desc': column.orderable && column.name == sortKey && dir == 'desc' }"
                 :style="{borderTop: column.orderable && column.name == sortKey && dir == 'desc' ? '5px solid #a3a3a3' : '5px solid #ccc' }">
            </div>
        </div>
        {{ column.label }}
    </th>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        column: {
            type: Object,
            default: () => ({}),
            required: true,
        },
        thClasses: {
            type: Object,
            default: () => ({}),
        },
        thIconClasses: {
            type: Object,
            default: () => ({}),
        },
        dir: {
            type: String
        },
        sortKey: {
            type: String,
            default: 'id'
        }
    },
    methods: {
        headerClasses(column) {
            let classes = this.classes;
            classes['table-header-sorting'] = column.orderable;
            return classes;
        },
        sort(column) {
            this.$emit('sort', column);
        },
    }
}
</script>