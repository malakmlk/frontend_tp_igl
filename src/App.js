import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
              <Link to="/About">About</Link>
              <Link to="/Form">Form</Link>
              <Link to="/landingPage">landingPage</Link>
              <Link to="/Note">Note</Link>
            </Navigation>
        </Header>
        <Drawer  >
            <Navigation >
            <img
                 src="https://icon-library.net/images/administration-icon/administration-icon-5.jpg"
                 alt="avatar"
                 className="avatar-img"
                  
                 >
                </img>
              <Link to="/About">About</Link>
              <Link to="/Form">Form</Link>
              <Link to="/landingPage">landingPage</Link>
              <Link to="/Note">Note</Link>
            </Navigation>
        </Drawer>
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
