import "./Services.css";

function Services() {
  const services = [
    {
      title: "Personal Training",
      description:
        "One-on-one customized training sessions with certified professionals tailored to your goals.",
      icon: "🎯",
      features: [
        "Custom workout plans",
        "Nutrition guidance",
        "Progress tracking",
        "Flexible scheduling",
      ],
    },
    {
      title: "Group Classes",
      description:
        "High-energy group fitness classes that motivate and challenge you alongside other members.",
      icon: "👥",
      features: [
        "Yoga & Pilates",
        "Spin classes",
        "HIIT training",
        "Zumba & Dance",
      ],
    },
    {
      title: "Strength Training",
      description:
        "Access to state-of-the-art strength equipment and expert guidance to build muscle and power.",
      icon: "💪",
      features: [
        "Free weights",
        "Resistance machines",
        "Functional training",
        "Powerlifting area",
      ],
    },
    {
      title: "Cardio Zone",
      description:
        "Modern cardio equipment with entertainment systems to make your workout enjoyable.",
      icon: "🏃",
      features: [
        "Treadmills",
        "Ellipticals",
        "Rowing machines",
        "Stationary bikes",
      ],
    },
    {
      title: "Swimming Pool",
      description:
        "Olympic-size swimming pool for laps, aqua aerobics, and relaxation.",
      icon: "🏊",
      features: [
        "Lap swimming",
        "Aqua fitness classes",
        "Swimming lessons",
        "Heated pool",
      ],
    },
    {
      title: "Nutrition Coaching",
      description:
        "Professional nutrition guidance to complement your fitness routine and optimize results.",
      icon: "🥗",
      features: [
        "Meal planning",
        "Dietary analysis",
        "Supplement advice",
        "Body composition testing",
      ],
    },
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Everything you need to achieve your fitness goals</p>
      </section>

      <section className="services-list">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                <button className="btn-learn-more">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="amenities">
        <div className="container">
          <h2>Additional Amenities</h2>
          <div className="amenities-grid">
            <div className="amenity">
              <span className="amenity-icon">🚿</span>
              <h4>Locker Rooms</h4>
              <p>Clean, spacious locker rooms with showers and amenities</p>
            </div>
            <div className="amenity">
              <span className="amenity-icon">🧖</span>
              <h4>Sauna & Steam</h4>
              <p>Relax and recover in our sauna and steam rooms</p>
            </div>
            <div className="amenity">
              <span className="amenity-icon">☕</span>
              <h4>Juice Bar</h4>
              <p>Healthy smoothies and snacks to refuel after workouts</p>
            </div>
            <div className="amenity">
              <span className="amenity-icon">📱</span>
              <h4>Member App</h4>
              <p>Track workouts, book classes, and connect with trainers</p>
            </div>
            <div className="amenity">
              <span className="amenity-icon">🅿️</span>
              <h4>Free Parking</h4>
              <p>Convenient parking for all members</p>
            </div>
            <div className="amenity">
              <span className="amenity-icon">📶</span>
              <h4>Free WiFi</h4>
              <p>Stay connected throughout the facility</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-services">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Experience all our services with a free trial</p>
          <button className="btn-trial-cta">Start Free Trial</button>
        </div>
      </section>
    </div>
  );
}

export default Services;
