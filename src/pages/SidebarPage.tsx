import Sidebar from "components/Sidebar";
import React, { useState } from "react";
import { Avatar, Hamburger } from "ui";

export const SidebarPage: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleSidebarOpen = () => {
    setIsActive(true);
  };

  const handleSidebarClose = () => {
    setIsActive(false);
  };

  return (
    <div className="SidebarPage">
      <h2>Sidebar</h2>
      <Hamburger
        color="black"
        isActive={isActive}
        onClick={handleSidebarOpen}
      />
      <Sidebar
        className="SidebarPageSidebar"
        isActive={isActive}
        onClose={handleSidebarClose}
      >
        <Avatar title="IT" />
      </Sidebar>
    </div>
  );
};