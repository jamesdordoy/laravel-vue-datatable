//Imports
import { shallowMount } from '@vue/test-utils'
import DataTableCell from '../components/DataTableCell'

describe('Data Table Cell', () => {
    test('can be mounted cleanly', () => {
        const wrapper = shallowMount(DataTableCell, {
            propsData: {
                value:{
                    name: 'James',
                },
              name: 'name'
            }
        });

        expect(wrapper.isVueInstance()).toBeTruthy()
    });
});