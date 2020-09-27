<script>

import ColumnNotFoundException from "../exceptions/ColumnNotFoundException";

export default {
    props: {
        row: {
            type: Number,
        },
        column: {
            type: Number,
        },
        transform: {

        },
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
        let transformedValue;

        if (typeof this.transform === 'function') {
           transformedValue = this.transform({ row: this.row, column: this.column, name: this.name, data: this.value, meta: this.meta });
        }
        
        if (this.comp) {

            let props = {
                name: this.name,
                data: this.value,
                meta: this.meta,
                transformed: transformedValue,
            };

            props[this.event] = this.handler;

            return createElement(this.comp, {
                props,
                attrs: {
                    classes: this.classes
                },
            });
        }
        
        if (typeof this.transform === 'function') {
            return createElement('span', {domProps:{innerHTML: transformedValue}})
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

        if (typeof columnName === 'undefined' && ! this.comp && columnName) {
            throw new ColumnNotFoundException(`The column ${this.name} was not found`);
        }
        
        return createElement('span', {domProps:{innerHTML: columnName}});
    }
}
</script>
