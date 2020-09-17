import React from 'react';
import './App.css';
import Layout from 'hoc/Layout/Layout';

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
