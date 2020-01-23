<script>
import Vue from "vue";

import ColumnNotFoundException from "../exceptions/ColumnNotFoundException";

export default {
    props: {
        comp: {
            type: Vue.component,
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
            default: () => {},
        },
        value: {
            type: Object,
            default: () => ({}),
        },
        classes: {
            type: [Object, String],
            default: () => ({}),
        },
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
                },
            });
        }

        let columnName;
        let handle = this.name.split(".");

        if (handle.length > 1) {
            columnName = this.value;
            for (let i = 0; i < handle.length; i++) {
                columnName = columnName[handle[i]];
            }
        } else {
            columnName = this.value[this.name];
        }

        if (typeof columnName === 'undefined') {
            throw new ColumnNotFoundException(`The column ${this.name} was not found`);
        }
        
        return createElement('span', {}, columnName);
    }
}
</script>
