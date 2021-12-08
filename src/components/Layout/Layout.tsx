import React, { ReactNode } from "react";
import "./Layout.css";

interface ILayoutProps {
  children?: ReactNode;
  index?: number;
}

export const Layout: React.FC<ILayoutProps> = ({ children , index}) => {
  return (
    <div className="Layout">
      <div className="Layout-Container">{children}</div>
    </div>
  );
};
