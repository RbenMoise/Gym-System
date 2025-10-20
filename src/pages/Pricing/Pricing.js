import "./Pricing.css";

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "29",
      period: "month",
      popular: false,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free WiFi",
        "1 guest pass per month",
        "Mobile app access",
      ],
    },
    {
      name: "Premium",
      price: "59",
      period: "month",
      popular: true,
      features: [
        "All Basic features",
        "Unlimited group classes",
        "Free parking",
        "Sauna & steam room",
        "5 guest passes per month",
        "Nutrition consultation",
        "Body composition analysis",
      ],
    },
    {
      name: "Elite",
      price: "99",
      period: "month",
      popular: false,
      features: [
        "All Premium features",
        "4 personal training sessions",
        "Priority class booking",
        "Towel service",
        "Unlimited guest passes",
        "Monthly massage therapy",
        "Custom meal planning",
        "24/7 gym access",
      ],
    },
  ];

  const addons = [
    { name: "Personal Training (per session)", price: "45" },
    { name: "Small Group Training (per session)", price: "25" },
    { name: "Nutrition Coaching (monthly)", price: "75" },
    { name: "Massage Therapy (per session)", price: "60" },
    { name: "Towel Service (monthly)", price: "15" },
  ];

  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <h1>Membership Plans</h1>
        <p>Choose the perfect plan for your fitness journey</p>
      </section>

      <section className="pricing-plans">
        <div className="container">
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`plan-card ${plan.popular ? "popular" : ""}`}
              >
                {plan.popular && (
                  <div className="popular-badge">Most Popular</div>
                )}
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn-select ${
                    plan.popular ? "btn-select-popular" : ""
                  }`}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="addons-section">
        <div className="container">
          <h2>Add-On Services</h2>
          <p className="addons-intro">
            Enhance your membership with additional services
          </p>
          <div className="addons-grid">
            {addons.map((addon, index) => (
              <div key={index} className="addon-card">
                <h4>{addon.name}</h4>
                <p className="addon-price">${addon.price}</p>
                <button className="btn-add">Add to Plan</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="trial-section">
        <div className="container">
          <div className="trial-content">
            <h2>Not Sure Yet?</h2>
            <p>Try us out with a 7-day free trial. No credit card required.</p>
            <button className="btn-trial-large">Start Free Trial</button>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Can I cancel my membership anytime?</h4>
              <p>
                Yes, you can cancel your membership at any time with 30 days
                notice. No hidden fees or penalties.
              </p>
            </div>
            <div className="faq-item">
              <h4>Is there a signup fee?</h4>
              <p>
                We occasionally run promotions with no signup fee. Standard
                signup fee is $49, which includes your welcome kit.
              </p>
            </div>
            <div className="faq-item">
              <h4>Can I freeze my membership?</h4>
              <p>
                Yes, you can freeze your membership for up to 3 months per year
                for a small monthly fee.
              </p>
            </div>
            <div className="faq-item">
              <h4>Do you offer student or senior discounts?</h4>
              <p>
                Yes! We offer 20% off for students with valid ID and seniors
                65+.
              </p>
            </div>
            <div className="faq-item">
              <h4>Can I bring a guest?</h4>
              <p>
                Guest passes are included with your membership. Basic includes 1
                per month, Premium includes 5, and Elite includes unlimited.
              </p>
            </div>
            <div className="faq-item">
              <h4>What payment methods do you accept?</h4>
              <p>
                We accept all major credit cards, debit cards, and ACH bank
                transfers for monthly payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-pricing">
        <div className="container">
          <h2>Ready to Transform Your Life?</h2>
          <p>Join over 27,000 members who are crushing their fitness goals</p>
          <button className="btn-join">Join Now</button>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
