import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    
      <Router>
        <Navbar/>

        <Route path="/" exact component={} />
        <Route path="/edit/:id" component={} />
        <Route path="/create" component={} />
        <Route path="/user" component={} />
      </Router>


  );
}

export default App;
