import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Movies from './pages/Movies';
import Celebrity from './pages/Celebrity';
import Tv from './pages/TV';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import MovieDetail from './pages/MovieDetail';


export default function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/person" element={<Celebrity />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  ) 
}
