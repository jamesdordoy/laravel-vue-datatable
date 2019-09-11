<script>
export default {
    props: {
        comp: {

        },
        meta: {
            type: Object,
            default: () => ({}),
        },
        name: {
            type: String,
            default: '',
        },
        event: {
            type: String,
            default: 'click',
        },
        handler: {
            type: Function,
            default: () => {}
        },
        value: {
            type: Object,
            default: () => ({}),
        },
        classes: {
            type: [Object, String],
            default: () => ({}),
        }
    },
    data() {
        return {};
    },
    render(createElement) {

        if (this.comp) {

            let props = {
                name: this.name,
                data: this.value,
                meta: this.meta,
            };

            props[this.event] = this.handler;

            return createElement(this.comp, {
                props,
                attrs: {
                    classes: this.classes
                }
            })
        }
        
        return createElement('span', {}, this.value[this.name])
    }
}
</script>
