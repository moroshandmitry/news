import React from 'react'

import styled, { css, keyframes } from 'styled-components'

interface SliderProps {
  checked: boolean
}

const switchLabelPosition = css`
  top: 15px;
  right: 15px;
  position: fixed;
`

const SwitchLabel = styled.label.attrs((props) => {
  return {
    htmlFor: props.htmlFor || 'switch',
    ...props,
  }
})`
  width: 60px;
  height: 34px;
  display: inline-block;
  ${switchLabelPosition}
`

const SwitchInput = styled.input.attrs((props) => {
  return {
    id: props.id || 'switch',
    name: props.name || 'switch',
    ...props,
  }
})`
  display: none;
`

const sliderBaseStyles = css`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  position: absolute;
  transition: background-color 0.4s;
`

const sliderAnimation = (start: number, middle: number, end: number) => keyframes`
  0% {
    transform: scale(${start});
  }
  50% {
    transform: scale(${middle});
  }
  100% {
    transform: scale(${end});
  }
`

const Slider = styled.span<SliderProps>`
  ${sliderBaseStyles}
  background-color: ${({ checked, theme: { colors } }) => {
    return checked ? colors.royalLavender : colors.lilacGray
  }};

  &:before {
    left: 4px;
    bottom: 4px;
    content: '';
    width: 26px;
    height: 26px;
    position: absolute;
    background-color: white;
    transition: transform 0.4s;
    transform: ${({ checked }) => (checked ? 'translateX(26px)' : 'translateX(0)')};
  }
`

const RoundSlider = styled(Slider)`
  border-radius: 34px;

  &:before {
    border-radius: 50%;
  }

  ${({ checked }) =>
    checked &&
    css`
      animation: ${sliderAnimation(1, 1.1, 1)} 0.5s ease-in-out;
    `}
`

interface ToggleSwitchProps {
  checked: boolean
  onChange: () => void
}

const Switch: React.FC<ToggleSwitchProps & { styles?: React.CSSProperties }> = (props) => {
  const { checked, onChange, styles } = props

  return (
    <SwitchLabel style={styles}>
      <SwitchInput type="checkbox" checked={checked} onChange={onChange} />
      <RoundSlider checked={checked} />
    </SwitchLabel>
  )
}

export default Switch
