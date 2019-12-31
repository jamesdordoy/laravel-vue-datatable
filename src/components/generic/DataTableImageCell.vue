<template>
    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d.jpg?s=40">
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