import Mform from './Mform';
import React  from "react";
import Details from './Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Mform />} />
        <Route exact path="/details" 
        element={<Details authorized={false} />}
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
