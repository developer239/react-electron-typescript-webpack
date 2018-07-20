import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import { Counter } from './Counter'


describe('Counter Component', () => {
  const handleIncrement = sinon.fake()
  const handleDecrement = sinon.fake()
  const handleClearValue = sinon.fake()
  const inputValue = 0
  const handleInputChange = sinon.fake()
  const handleSetDirectly = sinon.fake()

  it('renders with all props', () => {
    const wrapper = shallow((
      <Counter
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleClearValue={handleClearValue}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleSetDirectly={handleSetDirectly}
      />
    ))

    expect(wrapper).toMatchSnapshot()
  })

  it('it calls counter handlers', () => {
    const wrapper = shallow((
      <Counter
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleClearValue={handleClearValue}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleSetDirectly={handleSetDirectly}
      />
    ))
    const buttons = wrapper.find('Button')

    // Increment Handler
    buttons.at(0).simulate('click')
    expect(handleIncrement.callCount).toBe(1)

    // Decrement Handler
    buttons.at(1).simulate('click')
    expect(handleDecrement.callCount).toBe(1)

    // Clear Handler
    buttons.at(2).simulate('click')
    expect(handleClearValue.callCount).toBe(1)

    // Input Change Handler
    wrapper.find('Input').simulate('change', 1)
    expect(handleInputChange.callCount).toBe(1)

    // Handle Set Directly Button
    buttons.at(3).simulate('click')
    expect(handleSetDirectly.callCount).toBe(1)
  })
})
