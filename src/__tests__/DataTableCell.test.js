//Imports
import { shallowMount } from '@vue/test-utils'
import DataTableCell from '../components/DataTableCell'

import ColumnNotFoundException from '../exceptions/ColumnNotFoundException';

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

    test('can throw exception', () => {
        

        let thrownError;

        try {
            shallowMount(DataTableCell);
        }
        catch(error) {
            thrownError = error;
        }

        expect(thrownError).toBeInstanceOf(ColumnNotFoundException);

    });
});