<template>
    <div class="">
        <div class="row">
            <div class="col-md-8">
                <h2 class="markdown-header">Tailwind Example</h2>
            </div>
            <div class="col-md-4 relative">
                <div class="show-code-inline">
                    <label>Show Example Code</label>&nbsp;
                    <vue-switch></vue-switch>
                </div>
            </div>
        </div>

        <information-alert>
            I suggest wrapping the datatable component in your own component e.g. TailwindDatatable.vue so that the classes are limited to a single file.
        </information-alert>

        <pre v-highlightjs v-show="code">
            <tailwind-markdown>
            </tailwind-markdown>
        </pre>
            
        <data-table
            v-show="!code"
            :url="url"
            :classes="classes"
            :columns="columns"
            :per-page="[5, 10]">

            <!-- Override the top filters -->
            <div slot="filters" class="flex" slot-scope="{ tableData = {}, perPage = [] }">
                <div class="w-1/3">
                    <div class="relative">
                        <select
                            v-model="tableData.length"
                            class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight" id="grid-state">
                            <option
                                :key="index"
                                :value="records"
                                v-for="(records, index) in perPage">{{records}}</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div class="w-1/3"></div>
                <div class="w-1/3">
                    <input
                        type="text"
                        placeholder="Search..."
                        v-model="tableData.search"
                        class="block w-full text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                </div>
            </div>

            <!-- Override the bottom pagination -->
            <div slot="pagination" class="flex py-4 px-3 border-gray border border-t-0 bg-white" slot-scope="{ links = {}, meta = {} }">

                <div class="w-1/2 text-left">
                    <span>
                        Showing {{ meta.from }} to {{ meta.to }} of {{ meta.total }} Entries
                    </span>
                </div>

                <div class="w-1/2 text-right">
                    <button
                        :disabled="!links.prev"
                        @click="url = links.prev"
                        :class="{ 'opacity-50': !links.prev, 'cursor-not-allowed': !links.prev }"
                        class="bg-blue-500 text-white font-bold py-1 px-3 rounded mr-2">
                        Prev
                    </button>
                    <button
                        :disabled="!links.next"
                        @click="url = links.next"
                        :class="{ 'opacity-50': !links.next, 'cursor-not-allowed': !links.next }"
                        class="bg-blue-500 text-white font-bold py-1 px-3 rounded">
                        Next
                    </button>
                </div>
            </div>
        </data-table>
    </div>
</template>


<style>
@import url("https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css");
</style>

<script>
    import CodeExample from '../../mixins/CodeExample';
    import DataTable from '../../components/DataTable.vue';
    import VueSwitch from '../../components/generic/Switch';
    import TailwindMarkdown from '../../markdown/examples/tailwind.md';
    import InformationAlert from '../../components/generic/InformationAlert.vue';
    import DataTableDropdownCell from '../../components/generic/DataTableDropdownCell';
    import DataTableIsActiveCell from '../../components/generic/DataTableIsActiveCell';
    import DataTableNameAndImageCell from '../../components/generic/DataTableNameAndImageCell';
    
    export default {
        name: 'Tailwind',
        components: {
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            TailwindMarkdown,
            // eslint-disable-next-line
            VueSwitch,
            // eslint-disable-next-line
            DataTableDropdownCell,
            // eslint-disable-next-line
            DataTableIsActiveCell,
            // eslint-disable-next-line
            DataTableNameAndImageCell,
            // eslint-disable-next-line
            InformationAlert
        },
        mixins: [CodeExample],
        data() {
            return {
                url: process.env.VUE_APP_ELOQUENT_URL,
                columns: [
                    {
                        label: 'Name',
                        name: 'name',
                        orderable: true,
                        component: DataTableNameAndImageCell
                    },
                    {
                        label: 'Email',
                        name: 'email',
                        orderable: true,
                    },
                    {
                        label: 'Role',
                        name: 'role.name',
                        columnName: "roles.name",
                        orderable: true,
                    },
                    {
                        label: 'Status',
                        name: 'is_active',
                        orderable: true,
                        component: DataTableIsActiveCell,
                    },
                    {
                        label: '',
                        component: DataTableDropdownCell,
                    },
                ],
                classes: { 
                    'table-container': {
                        'justify-center': true,
                        'w-full': true,
                        'flex': true,
                        'rounded': true,
                        "border-gray-200": true,
                    },
                    table: {
                        'text-left': true,
                        'w-full': true,
                        'border': true,
                        "border-gray-200": true,
                    },
                    't-head': {
                        'text-gray-dark': true,
                        'border-gray': true,
                        'py-3': true,
                        'px-3': true,
                        'bg-gray-100': true,
                    },
                    "t-body": {
                        'bg-white': true,
                    },
                    "t-head-tr": {
                        'border-b': true,
                        'border-gray': true,
                    },
                    "t-body-tr": {
                        'stripped-table': true,
                        'bg-grey-darkest': true,
                    },
                    "td": {
                        'py-4': true,
                        'px-6': true,
                        'border-b': true,
                        'border-grey-light': true,
                        'text-gray-light': true,
                    },
                    "th": {
                        'py-4': true,
                        'px-6': true,
                        'font-bold': true,
                        'uppercase': true,
                        'text-sm': true,
                        'text-grey-dark': true,
                        'border-b': true,
                        'border-grey-light': true,
                    },
                }
            }
        },
    }
</script>
