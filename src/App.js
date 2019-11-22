import React from 'react';
import {Layout, Header, Navigation, Drawer, Content}from "react-mdl";
import Main from './components/main';
import './App.css';
import {Link} from 'react-router-dom'

function App() {
 
        return (
      
          <div className="demo-big-content">
          <Layout>
              <Header title="Title" scroll>
                  <Navigation>
                      <Link to="/About">About</Link>
                      <Link to="Form">Form</Link>
                      <Link to="Note">Note</Link>
                      <a href="#">Link</a>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <Link to="/About">About</Link>
                      <Link to="Form">Form</Link>
                      <Link to="Note">Note</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                   <Main/>         
              </Content>
          </Layout>
      </div>
        );
}

export default App;
