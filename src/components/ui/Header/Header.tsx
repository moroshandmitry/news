import React from 'react'
import styled from 'styled-components'

export const StyledHeader = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 24px 0px;
  color: ${({ theme }) => theme.colors.primary};
`

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <a href="#">
        <img alt="logo" src="https://point.md/static/svg/new-point-logo.svg" />
      </a>
      <div>Думай и решай свободно</div>
    </StyledHeader>
  )
}
export default Header
