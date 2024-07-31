import React from 'react';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Dashboard from './components/Dashboard.jsx'
import Productlist from './components/Productlist.jsx';
import Profilepage from './components/Profilepage.jsx';
import Addproduct from './components/Addproduct.jsx';

const App=() =>{
  return (
    <div>
      <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="*"
                        element={<Dashboard />}
                    />
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
