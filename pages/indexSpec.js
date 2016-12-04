/* describe, global it, expect */
import React from 'react';
import { mount } from 'enzyme';
import Index from './index.js';

describe('Index', function() {

    it('renders a button', () => {
        const index = mount(
            <Index />
        );

        expect(index.find('[data-test="toggleButton"]').length).toEqual(1);
    });

    it('on button click it opens the drawer', () => {
        const index = mount(
            <Index />
        );

        expect(index.find('[data-test-drawer-visible="true"]').length).toEqual(0);
        index.find('[data-test="toggleButton"]').simulate('click');
        expect(index.find('[data-test-drawer-visible="true"]').length).toEqual(1);
        index.find('[data-test="toggleButton"]').simulate('click');
        expect(index.find('[data-test-drawer-visible="true"]').length).toEqual(0);
    });

});
