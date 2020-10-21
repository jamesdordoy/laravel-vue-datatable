//Imports
import { shallowMount } from '@vue/test-utils'
import DataTableTh from '../src/components/DataTableTh'

describe('Data Table Header', () => {
    test('can be mounted cleanly', () => {
        const wrapper = shallowMount(DataTableTh, {
            propsData: {
                column: {

                },
                dir: 'thing',
            },
        });

        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});