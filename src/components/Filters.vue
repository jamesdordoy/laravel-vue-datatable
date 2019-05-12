<template>
    <div class="row mb-3">
        <div class="col-md-3">
            <select
                v-model="tableData.length"
                class="form-control">
                <option
                    :key="index"
                    :value="records"
                    v-for="(records, index) in perPage">
                    {{ records }}
                </option>
            </select>
        </div>
        <div class="col-md-3 offset-md-6">
            <input
                name="name"
                class="form-control"
                v-model="tableData.search"
                placeholder="Search Table">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getData() {
            this.$emit("getData");
        }
    },
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
    }
}
</script>

<style>

</style>
