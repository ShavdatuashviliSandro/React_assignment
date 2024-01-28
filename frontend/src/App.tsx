import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import FavoritesPage from './pages/FavoritesPage';
import RatingsPage from './pages/RatingsPage';


function App() {
  const isAuthenticated = true;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
          {isAuthenticated && (
            <>
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/ratings" element={<RatingsPage />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  )
}

export default App
