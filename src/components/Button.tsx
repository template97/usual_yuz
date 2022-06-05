import React from 'react';
import styled, { css } from 'styled-components';
import { Size } from '.';

const buttonSize = {
  small: 32,
  medium: 40,
  large: 48,
};
const fontSize = {
  small: 12,
  medium: 14,
  large: 16,
};

const commonButtonStyle = (size: Size) => css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  border-radius: 8px;

  min-height: ${buttonSize[size]}px;
  min-width: ${buttonSize[size]}px;
  font-size: ${fontSize[size]}px;
  padding: 0 8px;

  outline: 0 !important;
  border: 2px solid black;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;

  font-weight: 700;
  background-color: transparent;
  user-select: none;
  white-space: pre-wrap;

  &:active {
    transform: scale(0.95);
  }
  &:disabled {
    pointer-events: none;
  }
`;

const SolidButton = styled.button<Props>`
  ${(props) => commonButtonStyle(props.size)}
`;

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  size: Size;
}

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, ...defaultProps } = props;

  return (
    <SolidButton ref={ref} {...defaultProps}>
      {children}
    </SolidButton>
  );
});

export default Button;
