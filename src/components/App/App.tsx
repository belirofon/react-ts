import React from "react";
import "./App.css";
import { Header, Layout } from "components";
import Sidebar from "components/Sidebar";
import Button from "components/Button";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Header/>
        <Sidebar/>
        <Button/>
        {/* <Content/> */}
        {/* <Footer/> */}
      </Layout>
    </div>
  );
};
