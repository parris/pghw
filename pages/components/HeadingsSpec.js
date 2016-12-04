/* describe, global it, expect */
import React from 'react';
import { shallow } from 'enzyme';
import { SidebarHeading } from './Headings.js';

describe('Heading', function() {

    it('renders text', () => {
        const heading = shallow(
            <SidebarHeading>Hello world!</SidebarHeading>
        );

        expect(heading.find('span').text()).toEqual('Hello world!');
    });

});
