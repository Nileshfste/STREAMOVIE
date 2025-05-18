import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import Carousel from '../components/Carousel';
import { fetchMovieDetails } from '../services/api';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchMovieDetails(id);
      setMovie(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <div className="h-screen bg-gray-800 animate-pulse"></div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <LazyLoadImage
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full rounded-lg"
            effect="blur"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="text-lg mb-4">{movie.overview}</p>
          <p className="mb-2"><strong>Year:</strong> {movie.release_date.split('-')[0]}</p>
          <p className="mb-2"><strong>Genre:</strong> {movie.genres.map(g => g.name).join(', ')}</p>
          <p className="mb-2"><strong>Rating:</strong> {movie.vote_average}/10</p>
          <VideoPlayer />
        </div>
      </div>
      <Carousel title="Similar Movies" movies={movie.recommendations.results} />
    </div>
  );
}