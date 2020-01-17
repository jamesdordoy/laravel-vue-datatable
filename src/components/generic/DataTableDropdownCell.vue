<template>
    <font-awesome-icon :icon="['fas', 'ellipsis-v']" />
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>