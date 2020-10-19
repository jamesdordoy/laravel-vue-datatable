<template>
    <ul>
        <li v-for="role in data[name]" :key="role.id">
            <a href="#">{{ role.name }}</a>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        data: {},
        name: {}
    },
}
</script>