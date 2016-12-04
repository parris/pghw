/* describe, global it, expect */
import React from 'react';
import { mount } from 'enzyme';
import Drawer from './Drawer.js';

describe('Drawer', function() {

    it('renders heading', () => {
        const drawer = mount(
            <Drawer title='Hello world!' content={'Test'} isVisible={false}>Test</Drawer>
        );

        // normally i'd create a data-test to help with this, but I'm moving quick
        expect(drawer.find('span').text()).toEqual('Hello world!');
    });

});
