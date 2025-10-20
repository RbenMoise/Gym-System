import "./Trainer.css";

function Trainers() {
  const trainers = [
    {
      name: "John Smith",
      specialty: "Strength & Conditioning",
      experience: "10 years",
      certifications: ["NASM-CPT", "CSCS", "Precision Nutrition"],
      bio: "Specializes in helping clients build strength and improve athletic performance.",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Sarah Johnson",
      specialty: "Yoga & Mindfulness",
      experience: "8 years",
      certifications: ["RYT-500", "E-RYT-200", "Meditation Teacher"],
      bio: "Passionate about helping clients find balance through yoga and mindful movement.",
      image:
        "https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Mike Davis",
      specialty: "HIIT & Boxing",
      experience: "12 years",
      certifications: ["ACE-CPT", "Boxing Coach", "Kickboxing Instructor"],
      bio: "Former professional athlete dedicated to high-intensity training and combat sports.",
      image:
        "https://images.pexels.com/photos/1516585/pexels-photo-1516585.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Emily White",
      specialty: "Spin & Cardio",
      experience: "6 years",
      certifications: ["Spinning Instructor", "Group Fitness", "CPR/AED"],
      bio: "Brings energy and motivation to every cycling and cardio class.",
      image:
        "https://images.pexels.com/photos/3768895/pexels-photo-3768895.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Tom Wilson",
      specialty: "CrossFit & Functional",
      experience: "9 years",
      certifications: ["CrossFit L2", "USAW", "Mobility Specialist"],
      bio: "Expert in functional fitness and Olympic weightlifting techniques.",
      image:
        "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Lisa Brown",
      specialty: "Pilates & Barre",
      experience: "7 years",
      certifications: [
        "Pilates Instructor",
        "Barre Certified",
        "Pre/Postnatal",
      ],
      bio: "Focuses on core strength, flexibility, and body alignment through Pilates and Barre.",
      image:
        "https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Maria Garcia",
      specialty: "Dance Fitness",
      experience: "5 years",
      certifications: ["Zumba Gold", "Dance Fitness", "Group Exercise"],
      bio: "Makes fitness fun through dance-inspired workouts that get everyone moving.",
      image:
        "https://images.pexels.com/photos/3768722/pexels-photo-3768722.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Jennifer Lee",
      specialty: "Aqua Fitness & Nutrition",
      experience: "11 years",
      certifications: [
        "Aqua Fitness",
        "Registered Dietitian",
        "Wellness Coach",
      ],
      bio: "Combines water-based training with nutrition coaching for holistic wellness.",
      image:
        "https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="trainers-page">
      <section className="trainers-hero">
        <h1>Meet Our Expert Trainers</h1>
        <p>Certified professionals dedicated to your success</p>
      </section>

      <section className="trainers-intro">
        <div className="container">
          <h2>Why Our Trainers Are Different</h2>
          <p className="intro-text">
            Our team of 117+ certified trainers brings diverse expertise and
            passion to help you achieve your fitness goals. Each trainer is
            carefully selected for their knowledge, experience, and ability to
            motivate and inspire.
          </p>
        </div>
      </section>

      <section className="trainers-list">
        <div className="container">
          <div className="trainers-grid">
            {trainers.map((trainer, index) => (
              <div key={index} className="trainer-card">
                <div className="trainer-image">
                  <img src={trainer.image} alt={trainer.name} />
                  <div className="trainer-overlay">
                    <button className="btn-contact">Contact Trainer</button>
                  </div>
                </div>
                <div className="trainer-info">
                  <h3>{trainer.name}</h3>
                  <p className="specialty">{trainer.specialty}</p>
                  <p className="experience">{trainer.experience} Experience</p>
                  <p className="bio">{trainer.bio}</p>
                  <div className="certifications">
                    {trainer.certifications.map((cert, idx) => (
                      <span key={idx} className="cert-badge">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="trainer-benefits">
        <div className="container">
          <h2>Benefits of Personal Training</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-icon">🎯</span>
              <h4>Personalized Programs</h4>
              <p>
                Custom workout plans designed specifically for your goals and
                fitness level
              </p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">👁️</span>
              <h4>Expert Guidance</h4>
              <p>
                Learn proper form and technique to maximize results and prevent
                injuries
              </p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">📊</span>
              <h4>Progress Tracking</h4>
              <p>
                Regular assessments and adjustments to keep you on track toward
                your goals
              </p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">💪</span>
              <h4>Accountability</h4>
              <p>
                Stay motivated and committed with consistent support and
                encouragement
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-trainers">
        <div className="container">
          <h2>Ready to Work With a Trainer?</h2>
          <p>
            Schedule a complimentary consultation to find the perfect trainer
            for you
          </p>
          <button className="btn-schedule">Schedule Consultation</button>
        </div>
      </section>
    </div>
  );
}

export default Trainers;
