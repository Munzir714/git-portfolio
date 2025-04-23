import { useState, useEffect, useRef } from 'react';
import '../assets/css/Projects.css';
import project1Image from '../assets/images/project1.jpg';
import project2Image from '../assets/images/project2.jpg';

// Projects section component
function Projects() {
  const [filter, setFilter] = useState('all');
  const projectsRef = useRef(null);

  // Animate project cards when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.project-card').forEach((card) => {
            card.classList.add('visible');
          });
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) observer.observe(projectsRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      category: 'api',
      title: 'CRUD Operations',
      description: 'A RESTful API for e-commerce platforms with authentication, product management, and order processing, built as a capstone project.',
      image: project1Image,
      tech: ['HTML-5', 'CSS-3', 'JavaScript', 'React Js', 'Node Js', 'Express Js', 'MongoDB', 'Mongoose'],
      links: ['#', '#'],
    },
    {
      category: 'database',
      title: 'Cloud Cafe World',
      description: 'A tool to analyze and optimize database queries for small datasets, developed during coursework.',
      image: project2Image,
      tech: ['HTML-5', 'CSS-3', 'Bootstrap', 'JavaScript', 'React Js', 'Node Js', 'Express Js', 'MongoDB', 'Mongoose'],
      links: ['#', '#'],
    },
  ];

  return (
    <section id="projects" ref={projectsRef}>
      <div className="animated-bg-projects">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="star"></span>
        ))}
      </div>
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-filter">
          {['all', 'api', 'database'].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              data-category={project.category}
              style={{ display: filter === 'all' || filter === project.category ? 'block' : 'none' }}
            >
              <div className="project-img">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.links[0]} className="project-link">
                      <i className="fas fa-link"></i>
                    </a>
                    <a href={project.links[1]} className="project-link">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;