import "./About.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About FFL Gym</h1>
        <p>Your fitness journey, our passion</p>
      </section>

      <section className="mission">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Mission</span>
            <h2>Empowering Lives Through Fitness</h2>
          </div>
          <p className="mission-text">
            At FFL Gym, we believe that fitness is not just about physical
            transformation, but about building confidence, discipline, and a
            healthier lifestyle. Our mission is to provide a supportive
            environment where everyone, regardless of their fitness level, can
            achieve their personal goals.
          </p>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💪</div>
              <h3>Excellence</h3>
              <p>
                We strive for excellence in everything we do, from our equipment
                to our training programs.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>
                We foster a welcoming community where members support and
                motivate each other.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Results</h3>
              <p>
                We are committed to helping you achieve measurable results
                through proven methods.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Passion</h3>
              <p>
                Our passion for fitness drives us to continuously improve and
                innovate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2012, FFL Gym started with a simple vision: to create
                a fitness space that feels like home. What began as a small
                local gym has grown into a thriving fitness community with over
                27,000 members.
              </p>
              <p>
                Over the past 12 years, we've expanded our facilities, added
                cutting-edge equipment, and assembled a team of 117+ certified
                trainers who are dedicated to your success. But through all this
                growth, we've never lost sight of what matters most: you and
                your fitness journey.
              </p>
            </div>
            <div className="story-image">
              <img
                src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gym interior"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Journey?</h2>
          <p>
            Join thousands of members who have transformed their lives at FFL
            Gym
          </p>
          <button className="btn-cta">Get Started Today</button>
        </div>
      </section>
    </div>
  );
}

export default About;
