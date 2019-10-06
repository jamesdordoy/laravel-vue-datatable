<template>
    <button
        type="button"
        @click="click(data)"
        data-toggle="modal"
        class="btn btn-primary"
        data-target="#exampleModal">
        View Row {{ data.id }} Modal
    </button>
</template>

<script>
export default {
    props: {
        data: {},
        name: {},
        click: {},
        meta: {},
        classes: {},
    }
}
</script>