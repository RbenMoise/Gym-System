import { useState } from "react";
import "./Classes.css";

function Classes() {
  const [selectedDay, setSelectedDay] = useState("Monday");

  const schedule = {
    Monday: [
      {
        time: "6:00 AM",
        class: "Morning Yoga",
        trainer: "Sarah Johnson",
        duration: "60 min",
        level: "All Levels",
      },
      {
        time: "8:00 AM",
        class: "HIIT Bootcamp",
        trainer: "Mike Davis",
        duration: "45 min",
        level: "Advanced",
      },
      {
        time: "12:00 PM",
        class: "Spin Class",
        trainer: "Emily White",
        duration: "45 min",
        level: "Intermediate",
      },
      {
        time: "5:30 PM",
        class: "Strength Training",
        trainer: "John Smith",
        duration: "60 min",
        level: "All Levels",
      },
      {
        time: "7:00 PM",
        class: "Zumba Dance",
        trainer: "Maria Garcia",
        duration: "50 min",
        level: "Beginner",
      },
    ],
    Tuesday: [
      {
        time: "6:30 AM",
        class: "CrossFit",
        trainer: "Tom Wilson",
        duration: "60 min",
        level: "Advanced",
      },
      {
        time: "9:00 AM",
        class: "Pilates",
        trainer: "Sarah Johnson",
        duration: "55 min",
        level: "All Levels",
      },
      {
        time: "12:30 PM",
        class: "Boxing",
        trainer: "Mike Davis",
        duration: "50 min",
        level: "Intermediate",
      },
      {
        time: "6:00 PM",
        class: "Cardio Blast",
        trainer: "Emily White",
        duration: "45 min",
        level: "All Levels",
      },
      {
        time: "7:30 PM",
        class: "Yoga Flow",
        trainer: "Lisa Brown",
        duration: "60 min",
        level: "Beginner",
      },
    ],
    Wednesday: [
      {
        time: "6:00 AM",
        class: "Morning Yoga",
        trainer: "Sarah Johnson",
        duration: "60 min",
        level: "All Levels",
      },
      {
        time: "8:00 AM",
        class: "HIIT Bootcamp",
        trainer: "Mike Davis",
        duration: "45 min",
        level: "Advanced",
      },
      {
        time: "12:00 PM",
        class: "Aqua Fitness",
        trainer: "Jennifer Lee",
        duration: "45 min",
        level: "All Levels",
      },
      {
        time: "5:30 PM",
        class: "Strength Training",
        trainer: "John Smith",
        duration: "60 min",
        level: "All Levels",
      },
      {
        time: "7:00 PM",
        class: "Dance Fitness",
        trainer: "Maria Garcia",
        duration: "50 min",
        level: "Beginner",
      },
    ],
    Thursday: [
      {
        time: "6:30 AM",
        class: "CrossFit",
        trainer: "Tom Wilson",
        duration: "60 min",
        level: "Advanced",
      },
      {
        time: "9:00 AM",
        class: "Barre",
        trainer: "Lisa Brown",
        duration: "55 min",
        level: "All Levels",
      },
      {
        time: "12:30 PM",
        class: "Kickboxing",
        trainer: "Mike Davis",
        duration: "50 min",
        level: "Intermediate",
      },
      {
        time: "6:00 PM",
        class: "Spin Class",
        trainer: "Emily White",
        duration: "45 min",
        level: "Intermediate",
      },
      {
        time: "7:30 PM",
        class: "Restorative Yoga",
        trainer: "Sarah Johnson",
        duration: "60 min",
        level: "Beginner",
      },
    ],
    Friday: [
      {
        time: "6:00 AM",
        class: "Morning Yoga",
        trainer: "Sarah Johnson",
        duration: "60 min",
        level: "All Levels",
      },
      {
        time: "8:00 AM",
        class: "HIIT Bootcamp",
        trainer: "Mike Davis",
        duration: "45 min",
        level: "Advanced",
      },
      {
        time: "12:00 PM",
        class: "Core Conditioning",
        trainer: "John Smith",
        duration: "45 min",
        level: "All Levels",
      },
      {
        time: "5:30 PM",
        class: "Total Body",
        trainer: "Emily White",
        duration: "60 min",
        level: "All Levels",
      },
      {
        time: "7:00 PM",
        class: "Zumba Party",
        trainer: "Maria Garcia",
        duration: "50 min",
        level: "Beginner",
      },
    ],
    Saturday: [
      {
        time: "8:00 AM",
        class: "Power Yoga",
        trainer: "Sarah Johnson",
        duration: "75 min",
        level: "Intermediate",
      },
      {
        time: "9:30 AM",
        class: "Boot Camp",
        trainer: "Tom Wilson",
        duration: "60 min",
        level: "Advanced",
      },
      {
        time: "11:00 AM",
        class: "Family Fitness",
        trainer: "Jennifer Lee",
        duration: "45 min",
        level: "All Levels",
      },
      {
        time: "2:00 PM",
        class: "Spin & Strength",
        trainer: "Mike Davis",
        duration: "60 min",
        level: "Intermediate",
      },
    ],
    Sunday: [
      {
        time: "9:00 AM",
        class: "Gentle Yoga",
        trainer: "Lisa Brown",
        duration: "60 min",
        level: "Beginner",
      },
      {
        time: "10:30 AM",
        class: "Aqua Zumba",
        trainer: "Maria Garcia",
        duration: "45 min",
        level: "All Levels",
      },
      {
        time: "3:00 PM",
        class: "Stretch & Recovery",
        trainer: "Sarah Johnson",
        duration: "45 min",
        level: "All Levels",
      },
    ],
  };

  const days = Object.keys(schedule);

  return (
    <div className="classes-page">
      <section className="classes-hero">
        <h1>Group Classes</h1>
        <p>Find your perfect workout in our diverse class schedule</p>
      </section>

      <section className="class-types">
        <div className="container">
          <h2>Class Types</h2>
          <div className="types-grid">
            <div className="type-card">
              <span className="type-icon">🧘</span>
              <h3>Yoga & Pilates</h3>
              <p>Build flexibility, strength, and mindfulness</p>
            </div>
            <div className="type-card">
              <span className="type-icon">🔥</span>
              <h3>HIIT & Cardio</h3>
              <p>High-intensity workouts for maximum results</p>
            </div>
            <div className="type-card">
              <span className="type-icon">💪</span>
              <h3>Strength</h3>
              <p>Build muscle and increase power</p>
            </div>
            <div className="type-card">
              <span className="type-icon">💃</span>
              <h3>Dance</h3>
              <p>Fun, energetic dance-based workouts</p>
            </div>
            <div className="type-card">
              <span className="type-icon">🥊</span>
              <h3>Combat</h3>
              <p>Boxing, kickboxing, and martial arts</p>
            </div>
            <div className="type-card">
              <span className="type-icon">🏊</span>
              <h3>Aqua Fitness</h3>
              <p>Low-impact water-based exercise</p>
            </div>
          </div>
        </div>
      </section>

      <section className="schedule-section">
        <div className="container">
          <h2>Weekly Schedule</h2>
          <div className="day-selector">
            {days.map((day) => (
              <button
                key={day}
                className={`day-btn ${selectedDay === day ? "active" : ""}`}
                onClick={() => setSelectedDay(day)}
              >
                {day}
              </button>
            ))}
          </div>
          <div className="schedule-list">
            {schedule[selectedDay].map((item, index) => (
              <div key={index} className="schedule-item">
                <div className="schedule-time">{item.time}</div>
                <div className="schedule-details">
                  <h4>{item.class}</h4>
                  <p>Trainer: {item.trainer}</p>
                  <div className="schedule-meta">
                    <span className="duration">{item.duration}</span>
                    <span
                      className={`level level-${item.level
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {item.level}
                    </span>
                  </div>
                </div>
                <button className="btn-book">Book Class</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="class-benefits">
        <div className="container">
          <h2>Why Take Group Classes?</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <span className="benefit-icon">👥</span>
              <h4>Community Support</h4>
              <p>
                Work out alongside motivated members who push you to be your
                best
              </p>
            </div>
            <div className="benefit">
              <span className="benefit-icon">🎓</span>
              <h4>Expert Instruction</h4>
              <p>Learn proper form and technique from certified instructors</p>
            </div>
            <div className="benefit">
              <span className="benefit-icon">📅</span>
              <h4>Structured Schedule</h4>
              <p>Consistent class times help you build a workout routine</p>
            </div>
            <div className="benefit">
              <span className="benefit-icon">🎵</span>
              <h4>Energizing Environment</h4>
              <p>Great music and group energy make workouts more enjoyable</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Classes;
