import { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const player = new Plyr(videoRef.current, {
      controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
    });
    playerRef.current = player;

    const savedTime = localStorage.getItem('videoProgress');
    if (savedTime) {
      player.currentTime = parseFloat(savedTime);
    }

    player.on('timeupdate', () => {
      localStorage.setItem('videoProgress', player.currentTime);
    });

    return () => player.destroy();
  }, []);

  return (
    <div className="my-8">
      <video ref={videoRef} className="w-full rounded-lg">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}