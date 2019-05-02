<template>
    <button :class="classes" @click="click(data)" title="Update">
        <span><i class="fa fa-edit" aria-hidden="true"></i></span>
    </button>
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