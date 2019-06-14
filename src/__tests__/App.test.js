import { shallowMount } from '@vue/test-utils'
import App from '../App'

describe('Laravel Vue Data Tables Demo', () => {
    test('can be mounted cleanly', () => {
        const wrapper = shallowMount(App);
        expect(wrapper.isVueInstance()).toBeTruthy()
    });
});