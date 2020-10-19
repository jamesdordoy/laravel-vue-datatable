<template>
    <button :class="classes" @click="click(data)" title="Update">
        <span>
            <font-awesome-icon :icon="['far', 'eye']" />
        </span>
        &nbsp;
        {{ name }}
    </button>    
</template>

<script>
export default {
    props: {
        data: {},
        name: {},
        click: {
            type: Function,
            default: () => {}
        },
        classes: {
            type: Object,
            default: () => ({ 
                'btn': true,
                'btn-primary': true,
                'btn-sm': true,
            }),
        },
        meta: {},
    },
}
</script>