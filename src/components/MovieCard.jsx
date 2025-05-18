import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="group min-w-[200px]">
      <div className="relative overflow-hidden rounded-lg">
        <LazyLoadImage
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-300"
          effect="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <h3 className="absolute bottom-2 left-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {movie.title}
        </h3>
      </div>
    </Link>
  );
}