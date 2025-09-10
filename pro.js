const jobs = {
  "software engineer": {
    qualification: "Bachelor's in Computer Science or related field",
    skills: "Programming (Java, Python), Problem Solving, Git, Web Development"
  },
  "data analyst": {
    qualification: "Bachelor's in Statistics, Math, or related field",
    skills: "Excel, SQL, Python, Data Visualization, Critical Thinking"
  },
  "teacher": {
    qualification: "Bachelor's in Education or relevant subject",
    skills: "Communication, Patience, Lesson Planning, Classroom Management"
  },
  "nurse": {
    qualification: "Bachelor's in Nursing (BSc Nursing) and License",
    skills: "Patient Care, Medical Knowledge, Empathy, Teamwork"
  },
  "graphic designer": {
    qualification: "Bachelor's in Graphic Design or related field",
    skills: "Adobe Photoshop, Illustrator, Creativity, Typography, Communication"
  },
  "civil engineer": {
    qualification: "Bachelor's in Civil Engineering",
    skills: "Project Management, AutoCAD, Structural Design, Teamwork"
  },
  "mechanical engineer": {
    qualification: "Bachelor's in Mechanical Engineering",
    skills: "Problem Solving, CAD, Thermodynamics, Manufacturing Processes"
  },
  "accountant": {
    qualification: "Bachelor's in Accounting or Finance",
    skills: "Accounting Software, Financial Reporting, Excel, Analytical Skills"
  },
  "marketing manager": {
    qualification: "Bachelor's in Marketing or Business",
    skills: "SEO, Content Creation, Communication, Strategy Planning"
  },
  "web developer": {
    qualification: "Bachelor's in Computer Science or related field",
    skills: "HTML, CSS, JavaScript, React, Backend Development"
  },
  "doctor": {
    qualification: "MBBS and relevant specialization",
    skills: "Medical Knowledge, Diagnosis, Patient Care, Communication"
  },
  "lawyer": {
    qualification: "Bachelor's in Law (LLB) and License",
    skills: "Legal Research, Communication, Negotiation, Critical Thinking"
  },
  "hr manager": {
    qualification: "Bachelor's in HR or Business",
    skills: "Recruitment, Employee Relations, Communication, Organization"
  }
};

function searchJob() {
  const input = document.getElementById('jobInput').value.toLowerCase().trim();
  const resultDiv = document.getElementById('result');

  if (input && jobs[input]) {
    resultDiv.innerHTML = `
      <h3>Job: ${capitalize(input)}</h3>
      <h3>Qualification:</h3> ${jobs[input].qualification}
      <h3>Skills:</h3> ${jobs[input].skills}
    `;
  } else if(input) {
    resultDiv.innerHTML = "Sorry, information for this job is not available.";
  } else {
    resultDiv.innerHTML = "Please enter a job title.";
  }
}

function capitalize(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}
