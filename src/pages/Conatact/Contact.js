import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p>We're here to help you start your fitness journey</p>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="contact-intro">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-details">
                    <h4>Address</h4>
                    <p>
                      123 Fitness Street
                      <br />
                      Los Angeles, CA 90001
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-details">
                    <h4>Phone</h4>
                    <p>(555) 123-4567</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-details">
                    <h4>Email</h4>
                    <p>info@fflgym.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">🕐</div>
                  <div className="info-details">
                    <h4>Hours</h4>
                    <p>
                      Mon - Fri: 5:00 AM - 11:00 PM
                      <br />
                      Sat - Sun: 7:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon">
                    Facebook
                  </a>
                  <a href="#" className="social-icon">
                    Instagram
                  </a>
                  <a href="#" className="social-icon">
                    Twitter
                  </a>
                  <a href="#" className="social-icon">
                    YouTube
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="training">Personal Training</option>
                    <option value="classes">Group Classes</option>
                    <option value="facilities">Facilities Tour</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-placeholder">
          <div className="map-overlay">
            <h3>Visit Our Location</h3>
            <p>123 Fitness Street, Los Angeles, CA 90001</p>
            <button className="btn-directions">Get Directions</button>
          </div>
        </div>
      </section>

      <section className="visit-section">
        <div className="container">
          <h2>Ready to Visit?</h2>
          <p>Schedule a free tour of our facilities and meet our team</p>
          <button className="btn-tour">Schedule a Tour</button>
        </div>
      </section>
    </div>
  );
}

export default Contact;
