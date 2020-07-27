import React, { Fragment } from 'react';
import './App.css';
import Layout from 'hoc/Layout/Layout';
import Home from 'components/Home/Home';
import About from 'components/About/About';
import Contacts from 'components/Contacts/Contacts';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
         
          <Route path='/about' component={About}/>
          <Route path='/contacts' component={Contacts}/>
          <Route path='/' component={() => <Fragment>
            {/* <div className='background'><div className='background-border'></div></div> */}
            <Home/>
          </Fragment>}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
