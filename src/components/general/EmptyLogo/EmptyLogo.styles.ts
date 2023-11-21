import styled from 'styled-components'

export const StyledEmptyLogo = styled.span`
  width: 16px;
  height: 16px;
  font-size: 11px;
  font-weight: 500;
  margin-right: 8px;
  border-radius: 2px;
  position: relative;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.mediumGray};

  &::after {
    top: 50%;
    left: 50%;
    content: '';
    width: 10px;
    height: 10px;
    position: absolute;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: ${({ theme }) => theme.colors.white};
  }
`
