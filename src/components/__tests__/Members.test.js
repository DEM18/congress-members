import React from 'react';
import { shallow } from 'enzyme';
import Root from 'components/Root';
import Members from 'components/members/Members';
import Header from 'components/header/Header';

let component;

beforeEach( () => {
    component = shallow(
        <Root>
            <Members/>
        </Root>
    );
})

it('shows a header', () => {
    expect( component.find( Header ).length ).toEqual(1); 
});

