import styled from 'styled-components'


const Button = styled.button`
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  display: block;
  height: 36px;
  padding: 0 26px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  text-align: center;
  line-height: 36px;
  vertical-align: middle;
  white-space: nowrap;
  font-size: 14px;
  font-family: inherit;
  letter-spacing: 0.03em;
  position: relative;
  margin: 14px 0;
  width: 100%;
  
  &:focus {
    outline: 0;
  }
    
  &:hover {
    color: #fff;
    background-color: #39a1f4;
    outline: 0;
    text-decoration: none;
    border: none;
  }
`

Button.displayName = 'Button'

export default Button
