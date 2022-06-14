import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SearchBar from './components/search/SearchBar';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import ProductDetailPage from './pages/products/ProductDetailPage';
import SearchResultPage from './pages/search/SearchResultPage';


function App() {

  return (
    <BrowserRouter>
      <SearchBar />

      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/items/:id' element={<ProductDetailPage />} />
        <Route path='/items' element={<SearchResultPage />} />
        <Route path='*' element={
          <ErrorPage >
            <h4>Parece que esta página no existe</h4>
            <Link to="/" aria-hidden>Ir a la página principal</Link>
          </ErrorPage>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
