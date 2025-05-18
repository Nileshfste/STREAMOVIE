import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import SkeletonLoader from '../components/SkeletonLoader';
import { fetchTrending, fetchNewReleases, fetchTopPicks } from '../services/api';

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [topPicks, setTopPicks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [trendingData, newReleasesData, topPicksData] = await Promise.all([
        fetchTrending(),
        fetchNewReleases(),
        fetchTopPicks(),
      ]);
      setTrending(trendingData);
      setNewReleases(newReleasesData);
      setTopPicks(topPicksData);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Hero />
      {loading ? (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Loading...</h2>
          <div className="flex space-x-4">
            {[...Array(5)].map((_, i) => <SkeletonLoader key={i} />)}
          </div>
        </div>
      ) : (
        <>
          <Carousel title="Trending" movies={trending} />
          <Carousel title="New Releases" movies={newReleases} />
          <Carousel title="Top Picks" movies={topPicks} />
        </>
      )}
    </div>
  );
}