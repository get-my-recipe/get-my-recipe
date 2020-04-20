import React from 'react';
import Home from './components/home/home';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';


function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
