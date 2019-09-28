//Imports
import { shallowMount } from '@vue/test-utils'
import DataTable from '../components/DataTable'

describe('Data Table', () => {
    test('can be mounted cleanly', () => {
        const wrapper = shallowMount(DataTable, {
            propsData: {
                columns: [
                    {
                        label: 'ID',
                        name: 'id',
                        filterable: true,
                        width: 10,
                    },
                    {
                        label: 'Name',
                        name: 'name',
                        filterable: true,
                        width: 20,
                    },
                ],
              url: '',
            }
        });

        expect(wrapper.isVueInstance()).toBeTruthy()
    });
});