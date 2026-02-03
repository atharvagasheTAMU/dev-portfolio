import React from "react";
import "../assets/styles/Education.scss";

type EducationItem = {
  school: string;
  location: string;
  degree: string;
  gpa: string;
  date: string;
  coursework: string;
};

const educationItems: EducationItem[] = [
  {
    school: "Texas A&M University",
    location: "College Station, TX",
    degree: "Master of Science in Computer Engineering",
    gpa: "GPA: 4.00/4.00",
    date: "Dec 2025",
    coursework:
      "Analysis of Algorithms, Distributed Systems, Operating Systems, Parallel Computing, Data Mining",
  },
  {
    school: "Pune Institute of Computer Technology",
    location: "Pune, India",
    degree:
      "Bachelor of Engineering in Electronics and Telecommunications",
    gpa: "GPA: 8.65/10",
    date: "May 2020",
    coursework:
      "Data Structures and Algorithms, Object Oriented Programming, IoT, Computer Networks and Security, AI, ML",
  },
];

function Education() {
  return (
    <div id="education">
      <div className="items-container education-container">
        <h1>Education</h1>
        <div className="education-grid">
          {educationItems.map((item) => (
            <article className="education-card" key={item.school}>
              <div className="education-card__header">
                <div>
                  <h2>{item.school}</h2>
                  <p className="education-location">{item.location}</p>
                </div>
                <span className="education-date">{item.date}</span>
              </div>
              <p className="education-degree">{item.degree}</p>
              <p className="education-gpa">{item.gpa}</p>
              <p className="education-coursework">
                Coursework: {item.coursework}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;


