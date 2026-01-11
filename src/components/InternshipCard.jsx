import React from "react";
import Accordion from "./Accordion";

const InternshipCard = ({ title, duration, fee, skills }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
      <h2 className="text-2xl font-bold text-white">{title}</h2>

      <Accordion title="Training Details">
        Duration: {duration} <br />
        Mode: Online & In-Campus <br />
        Fee: {fee}
      </Accordion>

      <Accordion title="Key Responsibilities">
        {skills.map((skill, i) => (
          <p key={i}>• {skill}</p>
        ))}
      </Accordion>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfxKkwmyNSVtEsrNn1bB11l2fu9nWjfes0wUcGetM13cSRi3Q/viewform"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-500"
      >
        Apply Now
      </a>
    </div>
  );
};

export default InternshipCard;
