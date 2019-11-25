import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import main from './main';




class About extends Component {
    render()
    {
        return(
            <div style={{width: '100%', margin: '0px',marginTop:'0px',marginLeft:'0px'}} >
               <Layout fixedHeader>
               <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MySco</Link>} scroll>
                    <Navigation>
                          <Link to="/Form">Form</Link>
                          <Link to="/SignIn">landingPage</Link>
                          <Link to="/Note">Note</Link>
                    </Navigation>
              </Header>
              <Drawer>
                  <Navigation >
                    <Link to="/Form">Form</Link>
                    <Link to="/SignIn">landingPage</Link>
                    <Link to="/Note">Note</Link>
                  </Navigation>
              </Drawer>
              </Layout>
              
            
              <Content >
                  <div className="page-content"  />
                  <main/>
              </Content>
             
            </div>
        )
}
}

export default About;