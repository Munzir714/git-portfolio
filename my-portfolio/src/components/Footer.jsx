import '../assets/css/Footer.css';

// Footer component
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p>© 2025 <b>Munzir Ahmed</b>. All Rights Reserved.</p>
          <div className="footer-nav">
            {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <a key={section} href={`#${section}`}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;