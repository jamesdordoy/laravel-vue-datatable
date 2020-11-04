<template>
    <th
        scope="col"
        :key="column.name"
        :class="headerClasses(column)"
        class="laravel-vue-datatable-th"
        :style="'width: ' + column.width + '%'"
        @click="column.orderable  ? sort(column) : null">
        <div style="display: inline-block;" v-if="column.orderable">
            <div
                class="filter-asc"
                style="
                    width: 0;
                    height: 0;
                    margin-bottom: 1px;
                    border-bottom: 5px solid #ccc;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;"
                :class="{'active-filter-asc': column.orderable && column.name == currentSortColumn && dir == 'asc' }"
                :style="{borderBottom: column.orderable && column.name == currentSortColumn && dir == 'asc' ? '5px solid #a3a3a3' : '5px solid #ccc' }">
            </div>
            <div
                class="filter-desc"
                style="
                    width: 0;
                    height: 0;
                    margin-top: 1px;
                    border-top: 5px solid #ccc;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;"
                :class="{'active-filter-desc': column.orderable && column.name == currentSortColumn && dir == 'desc' }"
                :style="{borderTop: column.orderable && column.name == currentSortColumn && dir == 'desc' ? '5px solid #a3a3a3' : '5px solid #ccc' }">
            </div>
        </div>
        <span v-html="`&nbsp;${column.label}`"></span>
    </th>
</template>

<script>

import MergeClasses from "../functions/MergeClasses";
import OrderDirValidator from "../validators/data-table-order-dir";

export default {
    data() {
        return {
            currentSort: '',
        };
    },
    props: {
        column: {
            type: Object,
            default: () => ({}),
            required: true,
        },
        classes: {
            type: Object,
            default: () => ({}),
        },
        currentSortColumn: {
            type: String,
            default: '',
        },
        dir: {
            type: String,
            validator: OrderDirValidator
        }
    },
    methods: {
        headerClasses(column) {
            return MergeClasses(
                typeof column.columnClasses === "object" && column.columnClasses["!override"] ? {} : this.classes,
                {"table-header-sorting": column.orderable},
                column.columnClasses || {}, 
                (column.columnClasses || {}).th || {}
            );
        },
        sort(column) {
            this.setCurrentColumnSort(column.name);
            this.$emit('sort', column);
        },
        setCurrentColumnSort(columnName) {
            this.currentSort = columnName;
        }
    },
}
</script>