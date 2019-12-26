<template>
    <ul>
        <li v-for="role in data.roles" :key="role.id">
            <a href="#">{{ role.name }}</a>
        </li>
    </ul>
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
    },
}
</script>