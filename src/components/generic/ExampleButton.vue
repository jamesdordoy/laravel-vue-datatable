<template>
    <button :class="buttonClass" @click="clickFunction">
        <i :class="iconClass" aria-hidden="true"></i>
        {{ name }}
    </button>
</template>

<script>
    export default {
        props: {
            data: {},
            name: {},
            href: {
                type: String,
                default: null
            },
            method: {
                type: String,
                default: null
            },
            emit: {
                type: Boolean,
                default: false
            },
            click: {
                type: Function,
                default: () => {
                }
            },
            buttonClass: {
                type: Object,
                default: () => ({
                    'btn': true,
                    'btn-primary': true,
                    'btn-sm': true,
                }),
            },
            iconClass: {
                type: Object,
                default: () => ({
                    'fa': true,
                    'fa-eye': true,
                }),
            },
        },
        methods: {
            clickFunction() {
                let self = this;
                if (this.method) {
                    axios({
                        method: this.method,
                        url: this.href + '/' + this.data.id,
                    }).then(response => {
                        if (response.data.code == 1) {
                            self.reloadTable();
                        }
                    }).catch(error => {
                        console.log(error);
                    });
                }

                if (this.emit) {
                    this.click(this.data);
                }

                if (!this.emit && !this.method) {
                    window.location.href = this.href + '/' + this.data.id;
                }
            },
            reloadTable() {
                console.log(this.$parent.$parent.$parent.getData());
                // self.$parent.$emit('changed')
            }
        }
    }
</script>
