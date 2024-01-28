import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import FavoritesPage from "./pages/FavoritesPage";
import RatingsPage from "./pages/RatingsPage";
import LoginPage from "./pages/LoginPage";

import Navbar from "./components/NavBar";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const isAuthenticated = true;

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
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
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
