import styled from 'styled-components'

export const StyledDesc = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.deepPlum};

  & p {
    margin-bottom: 15px;
  }

  & img {
    max-width: 936px;
  }
`

export const StyledTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -1px;
  margin: 12px 0px 0px;
  color: ${({ theme }) => theme.colors.deepPlum};
`

export const StyledTitleShort = styled.h2`
  font-size: 20px;
  font-weight: 400;
  margin-top: 16px;
  line-height: 28px;
  letter-spacing: 0px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.deepPlum};
`
