<template>
    <div>
        <p class="text-gray-900 whitespace-no-wrap">${{ data[name] }}</p>
        <p class="text-gray-600 whitespace-no-wrap">USD</p>
    </div>
</template>

<script>
export default {
    props: {
        name: {},
        data: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>