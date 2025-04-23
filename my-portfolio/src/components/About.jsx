import { useEffect, useRef } from 'react';
import '../assets/css/About.css';
import profileImage from '../assets/images/profile.jpg';

// About section component
function About() {
  const aboutImageRef = useRef(null);
  const aboutTextRef = useRef(null);

  // Animate about section when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutImageRef.current.classList.add('visible');
          aboutTextRef.current.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutImageRef.current) observer.observe(aboutImageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="animated-bg-about"></div>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image" ref={aboutImageRef}>
            <div className="img-container">
              <img src={profileImage} alt="Munzir Ahmed Khan" />
            </div>
            <div className="about-shape"></div>
          </div>
          <div className="about-text" ref={aboutTextRef}>
            <h3>Back-End Developer & Database Enthusiast</h3>
            <p>
              I am a recent graduate passionate about back-end development, focusing on creating efficient server-side applications. I have a strong foundation in databases, API development, and server architecture, gained through academic projects and self-learning.
            </p>
            <p>
              I aim to build scalable solutions that meet user needs, combining technical skills with a commitment to delivering value through clean and optimized code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;