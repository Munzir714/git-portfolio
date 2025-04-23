import { useState } from 'react';
import '../assets/css/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Sending...';

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setStatus('Please fill in all fields.');
      submitBtn.textContent = 'Send Message';
      return;
    }

    const whatsappNumber = '+919689446818'; // Replace with your verified number
    const formattedMessage = encodeURIComponent(
      `New Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${formattedMessage}`;

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus('Message Sent!');
      submitBtn.textContent = 'Message Sent!';
      setTimeout(() => {
        submitBtn.textContent = 'Send Message';
        setStatus('');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact">
      <div className="animated-bg-contact">
        <span className="ripple"></span>
        <span className="ripple"></span>
        <span className="ripple"></span>
      </div>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            {[
              { icon: 'fas fa-map-marker-alt', title: 'Location', value: 'Maharashtra, India' },
              { icon: 'fas fa-envelope', title: 'Email', value: 'munzirahmedkhan.714@gmail.com' },
              { icon: 'fas fa-phone', title: 'Phone', value: '+91 968 944 6818' },
            ].map((item, i) => (
              <div className="contact-item" key={i}>
                <div className="contact-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="contact-details">
                  <h4>{item.title}</h4>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
            <div className="social-links">
              {[
                { href: '#', icon: 'fab fa-github' },
                { href: 'https://www.linkedin.com/in/munzir-ahmed-khan-aa7887295', icon: 'fab fa-linkedin-in' },
                { href: 'https://www.instagram.com/munnzirrrr/', icon: 'fab fa-instagram' },
                { href: '#', icon: 'fab fa-facebook' },
              ].map((link, i) => (
                <a key={i} href={link.href} className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form">
            <div className="form-pattern"></div>
            <form id="contactForm" onSubmit={handleSubmit}>
              {['name', 'email', 'subject'].map((field) => (
                <div className="form-group" key={field}>
                  <label htmlFor={field}>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              ))}
              <div className="form-group">
                <label htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </label>
              </div>
              {status && <div className="status-message">{status}</div>}
              <button type="submit" className="btn primary-btn">
                Send Message
                <span className="ripple-effect"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;