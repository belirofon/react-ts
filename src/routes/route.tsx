import { Route, Routes as Switch } from 'react-router-dom';
import React from "react";
import { SidebarPage } from 'pages/SidebarPage';


const Routes: React.FC = () => (
  <Switch>

    <Route path="/" element={<SidebarPage />} />
  </Switch>
);

export default Routes;
