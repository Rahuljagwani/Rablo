import Mform from './Mform';
import React  from "react";
import Details from './Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
function App() {
 
  return (
    < HashRouter>
      <Routes>
        <Route exact path="/" element={<Mform />} />
        <Route exact path="/details" 
        element={<Details authorized={false} />}
          />
      </Routes>
    </ HashRouter>
  );
}

export default App;
