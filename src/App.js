import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <Layout>
              
              
              <Content >
                  <div className="page-content"  />
                  <Main/>
              </Content>
     </Layout>
      

    );
  }
}

export default App;
