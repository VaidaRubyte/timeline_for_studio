import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUmbrella } from "react-icons/fa"; // Umbrella icon

const Main = () => {
  // Store the index of the expanded event (or null if none is expanded)
  const [expanded, setExpanded] = useState(null);

  // Timeline events
const events = [
  { year: 2000, title: "The Big Bang", details: "Openbrolly is founded and MovieSite Locations is launched. Locations is the first module of what is to become the leading in-the-cloud CRM for film offices." },
  { year: 2002, title: "The dawn of time", details: "Introduction of MovieSite Crew and MovieMaps. These additional module extends the capabilities of the software, meeting the needs and demands from film offices" },
  { year: 2007, title: "The Paleozoic Era", details: "Launch of OB Health and collaboration on projects like My Cancer Portal with the NHS. These projects put Openbrolly on an upward trend for the provision of support for critical services." },
  { year: 2010, title: "The Mesozoic Era", details: "MovieSite and OB Health experience significant growth, fostering a stronger community within Openbrolly." },
  { year: 2013, title: "The Cenozoic Era", details: "Recognition through awards in life sciences and technology for health, establishing Openbrolly as a leading SaaS provider in filming and healthcare." },
  { year: 2017, title: "Evolution", details: "Introduction of MovieSite Permits and EventsMakr, enhancing client collaboration and project management capabilities. The permits module starts to revoltionise time and motion, but bundling many manual tasks into one cohesive operation." },
  { year: 2022, title: "Transforming through every step", details: "Openbrolly partners with Moray HandyPerson Services (MHPS), a lifeline for older, disabled, and vulnerable residents in Moray. By providing cutting-edge website and database solutions, Openbrolly empowers MHPS to deliver more efficient and impactful services to the community." },
  { year: 2023, title: "A Bump in the road", details: "Geoff Wilcock, a key figure in Openbrolly, passes away. However, the team remains resilient, carrying forward his legacy. Launch of MS2, TrailPoint, and updated MovieMaps, showcasing continuous development of skills and technologies." },
  { year: 2024, title: "Finding meaning", details: "Openbrolly is proud to partner with the TV and Film Charity, supporting wellbeing and innovation across the entertainment industry." },
  { year: 2025, title: "The green road", details: "Openbrolly partners with Business Waste to create a groundbreaking programme – Hygieia –designed to simplify sustainability for TV and film productions across the UK." }

  ];

  return (
    <div>
      <h1>Timeline</h1>
      <VerticalTimeline>
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            date={event.year}
            iconStyle={{ background: "#2196F3", color: "#fff" }}
            icon={<FaUmbrella />}
            contentStyle={{ padding: "10px 20px", textAlign: "left" }} // Adjust padding
            dateClassName="timeline-date" // Custom class for styling
          >
            {/* Clickable title to toggle expansion */}
            <h3
              onClick={() => setExpanded(expanded === index ? null : index)}
              style={{ cursor: "pointer", color: "#007BFF", textDecoration: "underline" }} // Visual cue
            >
              {event.title}
            </h3>

            {/* Show details only if this event is expanded */}
            {expanded === index && <p>{event.details}</p>}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};


const App = () => {
  return (
    <div className="App">
      <Main />
    </div>
  );
};

export default App;