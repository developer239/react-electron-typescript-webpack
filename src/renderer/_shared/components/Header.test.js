import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'


describe('Header Component', () => {
  it('renders with all props', () => {
    const wrapper = shallow(<Header>My Header</Header>)
    expect(wrapper).toMatchSnapshot()
  })
})
