//Imports
import App from '../documentation/App'
import { shallowMount } from '@vue/test-utils'

describe('Laravel Vue Data Tables Demo', () => {
    test('can be mounted cleanly', () => {
        const wrapper = shallowMount(App);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});