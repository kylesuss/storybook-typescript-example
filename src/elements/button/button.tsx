import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

export interface ButtonProps {
  /** Children */
  children?: ReactNode;
  /** Button type */
  type?: string;
  /** Whether button is disabled */
  disabled?: boolean;
  /** Callback */
  onClick?(): void;
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  disabled = false
}) => (
  <StyledButton
    type={type}
    onClick={disabled ? undefined : onClick}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);

interface StyledButtonProps {
  disabled?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: "#000";
  color: "#fff";
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  padding: 0 10px;
  border: 0;
  height: 38px;
  line-height: 38px;
  ${({ disabled }) => {
    if (disabled) {
      return `
        opacity: 0.5;
        pointer-events: none;
      `;
    }
    return null;
  }}
`;
