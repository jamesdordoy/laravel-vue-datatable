<script>

import ColumnNotFoundException from "../exceptions/ColumnNotFoundException";

export default {
    props: {
        comps: {
            type: Array,
            default: () => ([]),
        },
        meta: {
            type: Object,
            default: () => ({}),
        },
        name: {
            type: String,
            default: '',
        },
        value: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {};
    },
    render(createElement) {

        if (this.comps.length) {
            let self = this;
            return createElement('div', this.comps.map(function (comp) {
                let props = {
                    name: comp.name,
                    data: self.value,
                    meta: self.meta,
                    href: comp.href,
                    method: comp.method,
                    emit: comp.emit,
                };

                props[comp.event] = comp.handler;

                return createElement(comp.component, {
                    props,
                    attrs: {
                        buttonClass: comp.classes.button,
                        iconClass: comp.classes.icon,
                    },
                });
            }))
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

        if (typeof columnName === 'undefined' && ! this.comp.length && columnName) {
            throw new ColumnNotFoundException(`The column ${this.name} was not found`);
        }
        
        return createElement('span', {}, columnName);
    }
}
</script>
