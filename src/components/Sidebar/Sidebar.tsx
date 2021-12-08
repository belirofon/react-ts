import React, { ReactNode, useRef } from 'react';
import { CSSTransition} from 'react-transition-group';
import classNames from 'classnames';
import   { Overlay }   from 'ui';
import './Sidebar.css';

export interface ISidebarProps {
    className?: string;
    children?: ReactNode;
    transition?: number;
    isActive?: boolean;
    onClose?: (event: React.MouseEvent) => void;
}
export const Sidebar: React.FC <ISidebarProps> =
  ({
     className,
     children,
     transition = 300,
     isActive,
     onClose}) => {
    const nodeRef = useRef(null);
    return (
      <>
        <Overlay isActive={isActive} onClick={onClose} />
        <CSSTransition in={isActive} nodeRef={nodeRef} timeout={transition} unmountOnExit>
          <div className={classNames('Sidebar', className)}>
            {children} ref={nodeRef}
          </div>
        </CSSTransition>
      </>
    );
  };

