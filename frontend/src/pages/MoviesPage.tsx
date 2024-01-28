interface Movie {
  id: string;
  title: string;
}

const movies: Movie[] = [
  {
    id: "hello",
    title: "Inception",
  },
];

export default function MoviesPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie: Movie) => (
          <div key={movie.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
            {/* Add other movie details */}
            <a className="underline" href="/">
              See More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
