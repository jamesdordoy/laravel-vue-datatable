<template>
    <div class="row mb-3">
        <div class="col-md-3">
            <select
                class="form-control"
                v-model="tableData.length">
                <option
                    :key="index"
                    :value="records"
                    v-for="(records, index) in perPage">
                    {{records}}
                </option>
            </select>
        </div>
        <div class="col-md-3 offset-md-6">
            <input
                name="name"
                class="form-control"
                v-model="tableData.search"
                :placeholder="placeholderSearch">
        </div>
    </div>
</template>

<script>
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
        }
    }
}
</script>
