import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import productionImage from './content/pictures/download.png';
import commercialsImage from './content/pictures/download (1).png';
import musicVideosImage from './content/pictures/download (2).png';
import liveShowsImage from './content/pictures/download (3).png';

const YouTubePlaceholder = ({ videoId }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const placeholderRef = useRef(null);

  const loadVideo = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadVideo();
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

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
          />
          <div className={styles.playButtonContainer}>
            <div className={styles.playButton}></div>
          </div>
        </div>
      )}
    </div>
  );
};

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const servicesSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="App">
      <Helmet>
        <title>Yanai Toren Production's - Home</title>
        <meta name="description" content="Welcome to ORI AMITAI PRODUCTION. Based in Tel Aviv, we create music videos for artists and content for global brands." />
      </Helmet>
      <header className={styles.heroSection}>
        <video autoPlay loop muted className={styles.heroVideo}>
          <source src='https://d3csxsarc47q4y.cloudfront.net/Untitled%20video%20-%20Made%20with%20Clipchamp.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.videoOverlay}>
          <h1>Yanai Toren Productions</h1>
          <hr className={styles.heroLine} />
          <p>Based in Tel Aviv, we are Creating Music Videos for artists and Content for Global brands.</p>
          <p>We bring the collective years of our experience and strategies to every project.</p>
          <Link to="/contact" className={styles.contactButton}>Contact</Link>
          <div className={styles.arrowDown}></div>
        </div>
      </header>
      <main>
        <section className={styles.productionSection}>
          <h2>Our Production</h2>
          <Slider {...settings} className={styles.slider}>
            <YouTubePlaceholder videoId="GBV1m1i6wWM" />
            <YouTubePlaceholder videoId="sLPt028Iao8" />
            <YouTubePlaceholder videoId="D0AN5mbIk_s" />
            <YouTubePlaceholder videoId="R-W2pClUlzQ" />
            <YouTubePlaceholder videoId="9aj713Txvpo" />
            <YouTubePlaceholder videoId="M_UxnjtQtRc" />
            <YouTubePlaceholder videoId="jNTd9yjpOxc" />
            <YouTubePlaceholder videoId="QhvWoDbGG_Q" />
          </Slider>
        </section>
        <section className={styles.servicesSection}>
          <h2>Our Services</h2>
          <Slider {...servicesSettings} className={styles.serviceCarousel}>
            <div className={styles.serviceContainer}>
              <img src={productionImage} alt="Production" className={styles.serviceImage} />
              <div className={styles.serviceName}>PRODUCTION</div>
            </div>
            <div className={styles.serviceContainer}>
              <img src={commercialsImage} alt="Commercials" className={styles.serviceImage} />
              <div className={styles.serviceName}>COMMERCIALS</div>
            </div>
            <div className={styles.serviceContainer}>
              <img src={musicVideosImage} alt="Music Videos" className={styles.serviceImage} />
              <div className={styles.serviceName}>MUSIC VIDEOS</div>
            </div>
            <div className={styles.serviceContainer}>
              <img src={liveShowsImage} alt="Live Shows" className={styles.serviceImage} />
              <div className={styles.serviceName}>LIVE SHOWS</div>
            </div>
          </Slider>
        </section>
      </main>
    </div>
  );
}

export default App;
