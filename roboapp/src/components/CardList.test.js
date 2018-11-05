import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';


it('expect to render card component' , () => {
    const mockRobots = [
        {
            id:1,
            name: 'john snow',
            username: 'johnhon',
            email: 'john@gmail.com'
    }]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot()
})
