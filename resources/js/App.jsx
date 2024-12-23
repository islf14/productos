import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import ShowProducts from './components/ShowProducts';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <ShowProducts/> } />
        <Route path='/create' element={ <CreateProduct/> } />
        <Route path='/edit/:id' element={ <EditProduct/> } />
      </Routes>
    </Router>
  )
}

export default App

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
