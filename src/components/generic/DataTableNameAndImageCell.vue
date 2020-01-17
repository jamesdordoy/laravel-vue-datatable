<template>
    <div>
        <img class="rounded-lg float-left pr-2" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d.jpg?s=40">
        {{ data.name }}
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => ({})
        }
    },
}
</script>