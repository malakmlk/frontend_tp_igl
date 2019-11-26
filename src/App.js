import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
    <div className="demo-big-content">
    <Layout>
              
              
              <Content >
                  <div className="page-content"  />
                  <Main/>
              </Content>
     </Layout>
      </div>

    );
  }
}

export default App;
