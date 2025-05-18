import { useRef } from 'react';
import MovieCard from './MovieCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Carousel({ title, movies }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full z-10"
        >
          <FiChevronLeft size={24} />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full z-10"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}