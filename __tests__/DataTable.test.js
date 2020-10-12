//Imports
import { shallowMount } from '@vue/test-utils'
import DataTable from '../src/components/DataTable'

describe('Data Table', () => {
    test('can be mounted cleanly', () => {
        const wrapper = shallowMount(DataTable, {
            propsData: {
                columns: [
                    {
                        label: 'ID',
                        name: 'id',
                        orderable: true,
                        width: 10,
                    },
                    {
                        label: 'Name',
                        name: 'name',
                        orderable: true,
                        width: 20,
                    },
                ],
              url: '',
            }
        });

        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});