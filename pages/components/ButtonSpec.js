/* describe, global it, expect */
import React from 'react';
import { shallow } from 'enzyme';
import { ButtonPrimary } from './Button.js';

describe('ButtonPrimary', function() {

    it('renders with a child', () => {
        const button = shallow(
            <ButtonPrimary>Hello world!</ButtonPrimary>
        );

        expect(button.find('button').text()).toEqual('Hello world!');
    });

    it('triggers an onClick callback when the button is clicked', () => {
        // id normally use sinon for this, but trying to move quick
        let callCount = 0;
        function clickStub() { callCount++; }

        const button = shallow(
            <ButtonPrimary onClick={clickStub}>Hello world!</ButtonPrimary>
        );

        button.find('button').simulate('click');

        expect(callCount).toEqual(1);
    });

});
