import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import { Main } from './Main'


describe('Main Component', () => {
  const counterValue = 0
  const handleButtonClick = sinon.fake()

  it('renders with all props', () => {
    const wrapper = shallow((
      <Main
        counterValue={counterValue}
        handleButtonClick={handleButtonClick}
      />
    ))

    expect(wrapper).toMatchSnapshot()
  })

  it('it calls counter handlers', () => {
    const wrapper = shallow((
      <Main
        counterValue={counterValue}
        handleButtonClick={handleButtonClick}
      />
    ))
    const buttons = wrapper.find('Button')

    // Open Counter Window Handler
    buttons.at(0).simulate('click')
    expect(handleButtonClick.callCount).toBe(1)
  })
})
