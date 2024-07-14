import React, { useState, useEffect, useRef } from 'react';
import styles from './HomePage.module.css';

const YouTubePlaceholder = ({ videoId }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const placeholderRef = useRef(null);

  const loadVideo = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadVideo();
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.25,
      rootMargin: '50px'
    });

    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    return () => {
      if (placeholderRef.current) {
        observer.unobserve(placeholderRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.videoContainer} ref={placeholderRef} onClick={loadVideo}>
      {isLoaded ? (
        <iframe
          width="100%"
          height="300"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div className={styles.videoPlaceholder}>
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Video Placeholder"
            className={styles.videoThumbnail}
            style={{ filter: 'blur(10px)' }} // Blur effect for smooth appearance
          />
          <div className={styles.playButtonContainer}>
            <div className={styles.playButton}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTubePlaceholder;
