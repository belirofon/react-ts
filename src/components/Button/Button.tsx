import React, { DOMAttributes } from "react";
import classNames from "classnames";
import "./Button.css";

export type ButtonType = "button" | "submit" | "reset";

export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
  isDisable?: boolean;
  typeButton?: ButtonType;
  onClick?: (event: React.MouseEvent) => void;
  
}

export const Button: React.FC<IButtonProps> = ({
  className,
  children,
  isDisable,
  typeButton,
  onClick,
  ...rest
}) => {
  return <button className={classNames("Button", className, {Button__diasbled: isDisable})}
  disabled = {isDisable}
  type = {typeButton}
  onClick = {onClick}
  {...rest}

  >
    <span>{children}</span>
  </button>;
};
