import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import modalbg from 'public/images/modal-bg.png';
import frame from 'public/images/video-frame-two.png';
import YoutubeEmbed from '@/components/youtube/YoutubeEmbed';

gsap.registerPlugin(ScrollTrigger);

const HomeTwoModal = () => {
  const [videoActive, setVideoActive] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const device_width = window.innerWidth;

    if (
      document.querySelectorAll('.modal-bg').length > 0 &&
      device_width > 576
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.modal-bg',
          start: 'center center',
          end: '+=100%',
          scrub: true,
          pin: false,
        },
      });

      tl.to('.modal-bg', {
        opacity: 0,
        scale: 1,
        y: '50%',
        duration: 2,
      });
    }
  }, []);

  // Unmute video when it starts playing
  const handlePlay = () => {
    if (videoRef.current) {
      setIsMuted(false);
      videoRef.current.muted = false;
    }
  };

  return (
    <>
      <div className="video-modal">
        <Image src={modalbg} alt="Image" className="modal-bg" />
        <button
          className="video-frame video-btn"
          onClick={() => setVideoActive(true)}
        >
          <Image src={frame} alt="Image" />
          <i className="fa-sharp fa-solid fa-play"></i>
        </button>
      </div>

      <div
        className={(videoActive ? ' video-zoom-in' : ' ') + ' video-backdrop'}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div className="video-container">
            {videoActive && (
              <video
                ref={videoRef}
                autoPlay
                loop
                controls
                muted={isMuted}
                playsInline
                onPlay={handlePlay} // Unmute when played
              >
                <source src="/images/Preview.mp4" type="video/mp4" />
              </video>
            )}

            {/* Uncomment below if you want to use YouTube Embed */}
            {/* {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />} */}

            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTwoModal;
