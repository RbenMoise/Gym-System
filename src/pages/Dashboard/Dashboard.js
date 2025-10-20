// pages/Dashboard.js - New component for user's plan page
import React, { useState, useEffect } from "react";
import "./Dashboard.css"; // Assume CSS file

function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("gymUser");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    } else {
      // Redirect to pricing if no user data
      window.location.href = "/pricing";
    }
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-page">
      <section className="dashboard-hero">
        <h1>Welcome, {userData.name}!</h1>
        <p>Your {userData.plan.name} Membership Dashboard</p>
      </section>

      <section className="plan-summary">
        <div className="container">
          <div className="plan-card-dashboard">
            <h3>{userData.plan.name} Plan</h3>
            <div className="plan-price">
              <span className="currency">$</span>
              <span className="amount">{userData.plan.price}</span>
              <span className="period">/{userData.plan.period}</span>
            </div>
            <ul className="plan-features">
              {userData.plan.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="check">✓</span> {feature}
                </li>
              ))}
            </ul>
            <div className="registration-info">
              <p>
                Registered on:{" "}
                {new Date(userData.registrationDate).toLocaleDateString()}
              </p>
              <p>Email: {userData.email}</p>
              <p>Phone: {userData.phone}</p>
            </div>
            <button className="btn-manage">Manage Membership</button>
          </div>
        </div>
      </section>

      <section className="quick-actions">
        <div className="container">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            <div className="action-card">
              <h4>Book a Class</h4>
              <button>View Schedule</button>
            </div>
            <div className="action-card">
              <h4>Track Progress</h4>
              <button>View Stats</button>
            </div>
            <div className="action-card">
              <h4>Contact Trainer</h4>
              <button>Message</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
