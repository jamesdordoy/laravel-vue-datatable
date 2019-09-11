//Imports
import Table from '../components/Table'
import { shallowMount } from '@vue/test-utils'


describe('Table', () => {
    test('can be mounted cleanly', () => {
        const wrapper = shallowMount(Table, {
            propsData: {
              columns: [],
              url: '',
            }
        });

        expect(wrapper.isVueInstance()).toBeTruthy()
    });
});