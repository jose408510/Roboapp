import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';


it('expect to render card component' , () => {
    expect(shallow(<Card/>)).toMatchSnapshot()
})


// most of the time we will use shallow