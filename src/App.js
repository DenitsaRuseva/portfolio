import React, { Fragment } from 'react';
import './App.css';
import Layout from 'hoc/Layout/Layout';
import Home from 'components/Home/Home';
import About from 'components/About/About';
import Contacts from 'components/Contacts/Contacts';
import Shop from 'container/Shop/Shop';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Switch>
          <Route path='/shop' component={Shop}/>
          <Route path='/about' component={About}/>
          <Route path='/contacts' component={Contacts}/>
          <Route path='/' component={Home}/>
        </Switch> */}
      </Layout>
    </div>
  );
}

export default App;
