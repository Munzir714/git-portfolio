import { useEffect, useRef } from 'react';
import '../assets/css/Skills.css';

// Skills section component
function Skills() {
  const skillsRef = useRef(null);

  // Animate skill bars when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.skill-item').forEach((item) => {
            item.classList.add('visible');
          });
          document.querySelectorAll('.skill-progress').forEach((bar) => {
            bar.style.width = bar.dataset.progress + '%';
          });
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Front-End Technologies',
      skills: [
        { name: 'HTML', icon: 'fab fa-html5', progress: 85 },
        { name: 'CSS', icon: 'fab fa-css3-alt', progress: 70 },
        { name: 'JavaScript (ES6)', icon: 'fab fa-js', progress: 30 },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', progress: 60 },
      ],
    },
    {
      title: 'Back-End Technologies',
      skills: [
        { name: 'Node.js', icon: 'fab fa-node-js', progress: 60 },
        { name: 'Express.js', icon: 'fas fa-server', progress: 40 },
        { name: 'Mongoose', icon: 'fas fa-database', progress: 60 },
      ],
    },
    {
      title: 'Database Management',
      skills: [
        { name: 'MongoDB', icon: 'fas fa-database', progress: 65 },
        { name: 'NoSQL', icon: 'fas fa-database', progress: 40 },
      ],
    },
    {
      title: 'Version Control & Tools',
      skills: [
        { name: 'Git/GitHub', icon: 'fab fa-github', progress: 60 },
        { name: 'Microsoft Visual Studio Code', icon: 'fas fa-microsoft', progress: 85 },
      ],
    },
  ];

  return (
    <section id="skills" ref={skillsRef}>
      <div className="animated-bg-skills">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="grid-dot"></span>
        ))}
      </div>
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, i) => (
                  <div className="skill-item" key={i}>
                    <div className="skill-name">
                      <i className={skill.icon}></i>
                      <h4>{skill.name}</h4>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-progress={skill.progress}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;