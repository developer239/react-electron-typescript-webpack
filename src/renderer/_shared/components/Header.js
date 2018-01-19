import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const HeaderContainer = styled.div`
  background-color: #03a9f4;
  width: 100%;
  padding: 28px 28px 10px 28px;
`

const HeaderText = styled.h1`
  color: white;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 1.5px;
`

const Header = props => (
  <HeaderContainer>
    <HeaderText>{props.children}</HeaderText>
  </HeaderContainer>
)

Header.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Header
