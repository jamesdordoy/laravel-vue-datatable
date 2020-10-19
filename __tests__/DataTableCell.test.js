//Imports
import { shallowMount } from '@vue/test-utils'
import DataTableCell from '../src/components/DataTableCell'

describe('Data Table Cell', () => {
    test('can be mounted cleanly', () => {
        const wrapper = shallowMount(DataTableCell, {
            propsData: {
                value:{
                    name: 'test',
                },
                name: 'name'
            }
        });

        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test('can be mounted with correct prop values', () => {
        const wrapper = shallowMount(DataTableCell, {
            propsData: {
                value:{
                    name: 'test',
                },
                name: 'name'
            }
        });

        expect(wrapper.props().value.name).toBe('test');
        expect(wrapper.props().name).toBe('name');
    });

    test('can be mounted with a default value', () => {
        const wrapper = shallowMount(DataTableCell, {
            propsData: {
                value:{
                    name: 'test',
                },
                name: 'name'
            }
        });

        expect(wrapper.text()).toBe('test');
    });

    test('can tranform values', () => {
        const wrapper = shallowMount(DataTableCell, {
            propsData: {
                value:{
                    name: 'james',
                },
                name: 'name',
                transform: ({data, name}) => { return data[name].charAt(0).toUpperCase() + data[name].slice(1) }
            }
        });

        expect(wrapper.text()).toBe('James');
    });
});