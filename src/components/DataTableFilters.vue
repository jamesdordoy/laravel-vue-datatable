<template>
    <div class="row mb-3">
        <div class="col-md-3">
            <select
                @change="getData()"
                v-model="tableData.length"
                class="form-control">
                <option
                    :key="index"
                    :value="records"
                    v-for="(records, index) in perPage">{{records}}</option>
            </select>
        </div>
        <div class="col-md-6"></div>
        <div class="col-md-3">
            <input
                name="name"
                class="form-control"
                @input="getData()"
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
    props: [
        "tableData", "perPage"
    ]
}
</script>

<style>

</style>
