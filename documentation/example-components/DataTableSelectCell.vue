<template>
    <select class="form-control">
        <option v-for="(item, key) in data[name]" :key="key">
            {{ item.name }}
        </option>
    </select>
</template>

<style scoped>
li {
    padding: 4px;
    margin: 0;
}

ul {
    margin:0;
    padding:0;
}
</style>

<script>
export default {
    props: {
        data: {},
        name: {},
        meta: {}
    },
}
</script>