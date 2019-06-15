import { shallowMount } from '@vue/test-utils'
import DataTable from '../components/DataTable'

describe('Data Table', () => {
    test('can be mounted cleanly', () => {
        const wrapper = shallowMount(DataTable, {
            propsData: {
              columns: [],
              url: '',
            }
        });

        expect(wrapper.isVueInstance()).toBeTruthy()
    });
});