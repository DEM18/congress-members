import React from 'react';
import { shallow } from 'enzyme';

import AppRouter from 'components/AppRouter';
import Characters from 'components/Characters';

let component;

beforeEach( () => {
    component = shallow(<AppRouter/>);
})

it('shows a a grid of characters', () => {
    expect( component.find( Characters ).length ).toEqual( 1 ); 
});

