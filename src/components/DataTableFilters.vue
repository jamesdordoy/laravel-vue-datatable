<template>
    <div :class="containerClasses">
        <div :class="firstHalfClasses">
            <select
                :class="selectClasses"
                v-model="tableData.length">
                <option
                    :key="index"
                    :value="records"
                    v-for="(records, index) in perPage">
                    {{records}}
                </option>
            </select>
        </div>
        <div :class="secondHalfClasses">
            <input
                name="table-search"
                :class="inputClasses"
                v-model="tableData.search"
                :placeholder="placeholderSearch">
        </div>
    </div>
</template>

<script>

import FrameworkValidator from "@/validators/data-table-framework";

export default {
    props: {
        tableData: {
            type: Object,
            default: () => ({}),
            required: true,
        },
        perPage: {
            type: Array,
            default: () => ([]),
            required: true,
        },
        placeholderSearch:{
            type: String,
            default: 'Search Table',
        },
        framework: {
            type: String,
            default: "bootstrap",
            validator: FrameworkValidator,
        },
    },
    computed: {
        containerClasses() {
            return  {
                "mb-3": true,
                "row": this.framework === "bootstrap",
                "flex flex-wrap justify-between": this.framework === "tailwind"
            }
        },
        firstHalfClasses() {
            return  {
                "col-md-3": this.framework === "bootstrap",
                "w-1/4" : this.framework === "tailwind"
            }
        },
        secondHalfClasses() {
            return  {
                "col-md-3 offset-md-6": this.framework === "bootstrap",
                "w-1/4 ": this.framework === "tailwind"
            }
        },
        inputClasses() {
            return  {
                "form-control": this.framework === "bootstrap",
                "w-full px-4 py-2 focus:bg-gray-300 max-w-full focus:outline-none border border-gray-200 rounded text-gray-700": this.framework === "tailwind"
            }
        },
        selectClasses() {
            return  {
                "form-control": this.framework === "bootstrap",
                "w-full px-4 py-2 focus:bg-gray-300 max-w-full focus:outline-none border border-gray-200 rounded text-gray-700": this.framework === "tailwind"
            }
        }
    }
}
</script>
