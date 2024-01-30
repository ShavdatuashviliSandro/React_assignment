import { useEffect } from "react";
import Movie from "../components/Movie";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../redux/moviesSlice";
import axios from "axios";
// import { MovieType } from "../types/movieTypes";

export default function MoviesPage() {
  const dispatch = useDispatch();
  const movies = useSelector((state: any) => state.movie.movies);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movies');
        dispatch(setMovies(response.data.movies));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [dispatch]);

  useEffect(() => {
    // movies = useSelector((state: any) => state.movie.movies);
    console.log("movies: ", movies)
  }, [movies]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie: any) => (
          <Movie title={movie.title} genre={movie.genre} rating={movie.rating} />
        ))}
      </div>
    </div>
  );
} 
