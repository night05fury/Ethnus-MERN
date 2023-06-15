import React from 'react';

import Navbar from './component/Navbar';
import TextArea from './component/TextArea';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar tittle="Word Counter" />

        <div className="container my-3">
          <Routes>
           
            <Route path="/" element={ <TextArea heading="Enter the text to analyze" />}>
             
            </Route>
          </Routes>
        </div>
        
      </Router>
    </>
  )
}

export default App