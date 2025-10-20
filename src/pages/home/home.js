import "./home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Push Your
            <br />
            Limits with Us
          </h1>
          <p className="hero-description">
            From beginner to advanced, experience workouts designed to help you
            achieve peak performance and exceed your fitness goals.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              Join Now <span>→</span>
            </button>
            <button className="btn-secondary">
              <span className="play-icon">▶</span> Watch Video
            </button>
          </div>
          <div className="reviews">
            <div className="review-avatars">
              <div className="avatar"></div>
              <div className="avatar"></div>
              <div className="avatar"></div>
            </div>
            <div className="review-text">
              <strong>1.7k</strong> reviews
            </div>
          </div>
          <div className="tags">
            <span className="tag">Personal Training</span>
            <span className="tag">Strength</span>
            <span className="tag">Group Classes</span>
            <span className="tag">Swimming</span>
            <span className="tag">Cardio Equipment</span>
            <span className="tag">Functional Workouts</span>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="section-header">
          <span className="section-label">About Us</span>
          <h2 className="section-title">
            YOUR <span className="highlight">FITNESS</span> JOURNEY STARTS HERE
          </h2>
        </div>
        <p className="about-text">
          At FFL Gym, we are dedicated to helping you unlock your full fitness
          potential. With top-tier equipment, expert trainers, and a welcoming
          community, we provide the perfect environment to push your limits and
          achieve your goals.
        </p>
        <div className="stats">
          <div className="stat">
            <h3 className="stat-number">
              12<span className="plus">+</span>
            </h3>
            <p className="stat-label">Years of Excellence</p>
          </div>
          <div className="stat">
            <h3 className="stat-number">
              27K<span className="plus">+</span>
            </h3>
            <p className="stat-label">Members</p>
          </div>
          <div className="stat">
            <h3 className="stat-number">
              60<span className="plus">+</span>
            </h3>
            <p className="stat-label">Weekly Classes</p>
          </div>
          <div className="stat">
            <h3 className="stat-number">
              117<span className="plus">+</span>
            </h3>
            <p className="stat-label">Expert Trainers</p>
          </div>
        </div>
        <div className="video-placeholder">
          <div className="play-button">▶</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
