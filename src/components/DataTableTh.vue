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
                :class="{'active-filter-asc': column.orderable && column.name == currentSort && dir == 'asc' }"
                :style="{borderBottom: column.orderable && column.name == currentSort && dir == 'asc' ? '5px solid #a3a3a3' : '5px solid #ccc' }">
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
                :class="{'active-filter-desc': column.orderable && column.name == currentSort && dir == 'desc' }"
                :style="{borderTop: column.orderable && column.name == currentSort && dir == 'desc' ? '5px solid #a3a3a3' : '5px solid #ccc' }">
            </div>
        </div>
        <span v-html="`&nbsp;${column.label}`"></span>
    </th>
</template>

<script lang="ts">

import MergeClasses from "../functions/MergeClasses";
import { Component, Vue, Prop } from 'vue-property-decorator';
import OrderDirValidator from "@/validators/data-table-order-dir";

@Component
export default class DataTableTh extends Vue {

    private currentSort: string = '';

    @Prop({
        type: Object,
        default: () => ({}),
    }) private classes: object;

    @Prop({
        type: Object,
        required: true,
        default: () => ({}),
    }) private column: object;

    @Prop({
        type: String,
        default: 'asc',
        validator: OrderDirValidator,
    }) private dir: string;

    private headerClasses(column) {
        return MergeClasses(
            typeof column.columnClasses === "object" && column.columnClasses["!override"] ? {} : this.classes,
            {"table-header-sorting": column.orderable},
            column.columnClasses || {}, 
            (column.columnClasses || {}).th || {}
        );
    }

    private sort(column): void {
        this.setCurrentColumnSort(column.name);
        this.$emit('sort', column);
    }
    
    private setCurrentColumnSort(columnName): void {
        this.currentSort = columnName;
    }
}
</script>
