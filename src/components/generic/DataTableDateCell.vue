<template>
    <span> {{ data[name]|formatDate }} </span>
</template>

<script>
export default {
    props: {
        data: {},
        name: {},
        click: {},
        classes: {},
    }
}
</script>

<style scoped>

/* mouse over link */
a:hover {
  color: #4dc0b5;
}

/* selected link */
a {
  color: #3490dc;
}

</style>