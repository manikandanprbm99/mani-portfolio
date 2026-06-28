import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Experience.css";

const experiences = [
  {
    company: "Haritha Motors - Honda",
    role: "Service Advisor",
    location: "Madurai",
    period: "2025 - 2026",
    responsibilities: [
      "Managed customer vehicle service appointments.",
      "Explained repair estimates and service recommendations.",
      "Coordinated technicians for timely vehicle delivery.",
      "Improved customer satisfaction through quality service."
    ]
  },
  {
    company: "Xpress TVS Motor Pvt Ltd",
    role: "Service Advisor & Floor Supervisor",
    location: "Madurai",
    period: "2025 - 2025",
    responsibilities: [
      "Managed customer vehicle intake and job cards.",
      "Supervised workshop floor operations.",
      "Assigned work to technicians.",
      "Ensured on-time vehicle delivery."
    ]
  },
  {
    company: "Madras Motors - Royal Enfield",
    role: "Floor Supervisor",
    location: "Madurai",
    period: "2024 - 2025",
    responsibilities: [
      "Managed workshop operations.",
      "Allocated technician tasks.",
      "Monitored productivity.",
      "Maintained service quality."
    ]
  },
  {
    company: "TAFE - Tractors and Farm Equipment",
    role: "Quality Department",
    location: "Tamil Nadu",
    period: "2022 - 2023",
    responsibilities: [
      "Performed manufacturing quality inspection.",
      "Maintained quality standards.",
      "Supported process improvement.",
      "Worked with QA team."
    ]
  },
  {
    company: "TVS Rubber Factory",
    role: "Quality Department",
    location: "Tamil Nadu",
    period: "2021 - 2022",
    responsibilities: [
      "Performed quality inspection.",
      "Maintained production standards.",
      "Prepared quality reports.",
      "Supported manufacturing team."
    ]
  }
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Professional Journey</span>
          <h2>Work <span>Experience</span></h2>
          <p>
            My journey across manufacturing, automobile service and customer management has strengthened my leadership, communication and problem-solving skills.
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            > 
        <div className="timeline-dot">
  <FaBriefcase />
</div>

<div className="experience-card">   

              <h3><FaBriefcase /> {exp.company}</h3>
              <h4>{exp.role}</h4>
              <div className="meta">
                <span><FaCalendarAlt /> {exp.period}</span>
                <span><FaMapMarkerAlt /> {exp.location}</span>
              </div>
              <ul>
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
