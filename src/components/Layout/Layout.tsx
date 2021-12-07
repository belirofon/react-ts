import React, { ReactNode } from "react";
import "./Layout.less";

interface ILayoutProps {
  children?: ReactNode;
  index?: number;
}

export const Layout: React.FC<ILayoutProps> = ({ children, index }) => {
  return (
    <div
      className={"Layout-container"}
      onClick={() => {
        console.log(index);
      }}
    >
      Я див
    </div>
  );
};
