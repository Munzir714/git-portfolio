import '../assets/css/Hero.css';
import resume from '../assets/pdf/resume.pdf';

// Hero section component
function Hero() {
  return (
    <section id="hero">
      <div className="animated-bg-hero">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="particle"></span>
        ))}
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title gradient-name">MUNZIR AHMED KHAN</h1>
          <p className="hero-description">
            A passionate Back-End Developer specializing in building robust and scalable server-side applications.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn primary-btn">Hire Me</a>
            <a href={resume} className="btn secondary-btn" download>View Resume</a>
          </div>
        </div>
      </div>
      <div className="hero-bg"></div>
    </section>
  );
}

export default Hero;