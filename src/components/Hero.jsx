import { useEffect, useState } from 'react';
import { fetchTrending } from '../services/api';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Hero() {
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      const trending = await fetchTrending();
      setFeatured(trending[0]);
    };
    fetchFeatured();
  }, []);

  if (!featured) return <div className="h-screen bg-gray-800 animate-pulse"></div>;

  return (
    <div className="relative h-screen">
      <LazyLoadImage
        src={`https://image.tmdb.org/t/p/original${featured.backdrop_path}`}
        alt={featured.title}
        className="w-full h-full object-cover"
        effect="blur"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-20 left-4 md:left-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{featured.title}</h1>
        <p className="text-lg md:text-xl max-w-2xl">{featured.overview}</p>
        <button className="mt-4 bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700">
          Watch Now
        </button>
      </div>
    </div>
  );
}