import { shallowMount } from '@vue/test-utils'
import Table from '../components/Table'

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