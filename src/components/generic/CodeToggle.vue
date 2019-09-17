<template>
    <div class="form-check mb-2">
        <input
            id="showCode"
            type="checkbox"
            v-model="checked"
            @change="onChange"
            class="form-check-input">
        <label
            for="showCode"
            class="form-check-label">
            Show Code
        </label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false,
        };
    },
    watch: {
        value: {
            handler(newValue) {
                this.checked = newValue;
            },
            immediate: true
        }
    },
    methods: {
        onChange() {
            this.$emit("input", this.checked);
        }
    },
    props: {
        value: {
            type: Boolean,
            default: false,
        }
    }
}
</script>
