import { shallow } from 'enzyme';
import React from 'react';
import App from './App';


it('expect to render card component' , () => {
    const mockStore = {
        robots: [],
        searchField: ''
    }
    expect(shallow(<App store={ mockStore }/>)).toMatchSnapshot()
})

