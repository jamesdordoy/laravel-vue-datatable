<template>
    <select class="form-control">
        <option v-for="item in data[name]" :key="item.id">
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
        name: {}
    },
}
</script>