<script>
export default {
    props: {
        comp: {

        },
        name: {
            type: String,
            default: '',
        },
        value: {
            type: Object,
            default: () => ({}),
        },
        clickEvent: {
            type: Function,
        },
        classes: {

        }
    },
    data() {
        return {};
    },
    render(createElement) {

        if (this.comp) {
            return createElement(this.comp, {
                props: {
                    data: this.value,
                    name: this.name,
                    click: this.clickEvent,
                },
                attrs: {
                    classes: this.classes
                }
            })
        }
        
        return createElement('span', {}, this.value[this.name])
    }
}
</script>
