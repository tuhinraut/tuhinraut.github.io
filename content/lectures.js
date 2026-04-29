const lecturesInfo = {
  courseCode: "BBL434",
  courseName: "Bioinformatics",
  moduleName: "Structural Bioinformatics Module",
  professor: "Prof. Ishaan Gupta",
  university: "DBEB, IIT Delhi",
  batch: "2026",
  description: ""
};

const lectures = [
  {
    title: "History of Structural Biology",
    date: "April 17, 2026",
    number: 1,
    description: "<em>Introduction to structural biology covering its historical evolution from the lock-and-key model to modern understanding of protein function.</em>",
    file: "./lectures/History_of_structural_biology.pdf"
  },
  {
    title: "Descriptors of Protein's Structure and Motion",
    date: "April 18, 2026",
    number: 2,
    description: "<em>Quantitative analysis of protein structures covering primary and secondary structures, torsion angles, and Ramachandran plots.</em>",
    file: "./lectures/Descriptors_of_protein's_structure_and_motion.pdf"
  },
  {
    title: "Encoding of a Protein",
    date: "April 21, 2026",
    number: 3,
    description: "<em>Different computational approaches to encode protein structures at various resolution levels for computational analysis.</em>",
    file: "./lectures/Encoding_of_a_protein.pdf"
  },
  {
    title: "Protein Models",
    date: "April 24, 2026",
    number: 4,
    description: "<em>Overview of modern protein modeling approaches including sequence-level, structure-level, and dynamics-level computational models.</em>",
    file: "./lectures/Protein_Models.pdf"
  }
];

const tutorials = [
  {
    title: "Tutorial 1",
    description: "<em>Exploring protein structure files and visualizing ligand-bound GPCR complexes using PyMOL to identify binding sites and molecular interactions.</em>",
    driveLink: "https://drive.google.com/drive/folders/17oSkfPjGeSR34WTZrMshn4bQvjzx_MAq"
  },
  {
    title: "Tutorial 2",
    description: "<em>Applying Principal Component Analysis (PCA) to ligand binding dynamics and analyzing provided Potential of Mean Force (PMF) contour plots to map conformational states during binding/unbinding processes.</em>",
    driveLink: "https://drive.google.com/drive/folders/1IrmRxURcGDSimmZ_x9CDmFzWNaowiCaO?usp=sharing"
  }
];

// Function to create lecture card HTML
function createLectureCard(lecture) {
  return `
    <div class="lecture-card">
      <div class="lecture-header">
        <div class="lecture-number">Lecture ${lecture.number}</div>
        <div class="lecture-date">${lecture.date}</div>
      </div>
      <h3 class="lecture-title">${lecture.title}</h3>
      <p class="lecture-description">${lecture.description}</p>
      <a href="${lecture.file}" class="lecture-download-btn" download>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Download Slides
      </a>
    </div>
  `;
}

// Function to create tutorial card HTML
function createTutorialCard(tutorial) {
  return `
    <div class="tutorial-card">
      <h3 class="tutorial-title">${tutorial.title}</h3>
      <p class="tutorial-description">${tutorial.description}</p>
      <a href="${tutorial.driveLink}" target="_blank" class="tutorial-link-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        Access on Google Drive
      </a>
    </div>
  `;
}

// Function to load lectures section
function loadLectures() {
  const container = document.getElementById("lectures-container");
  if (!container) return;

  // Add "Courses" title outside the wrapper
  const coursesTitle = document.createElement('h2');
  coursesTitle.className = 'section-title';
  coursesTitle.textContent = 'Courses';
  coursesTitle.style.marginBottom = '0.5rem';
  container.appendChild(coursesTitle);

  // Create wrapper for course content
  const courseWrapper = document.createElement('div');
  courseWrapper.className = 'course-wrapper';

  // Create course info section
  const courseInfoHTML = `
    <div class="course-info-banner">
      <div class="course-header">
        <h3>${lecturesInfo.courseCode}: ${lecturesInfo.courseName} - ${lecturesInfo.moduleName}</h3>
        <div class="course-meta">
          <span class="course-professor"><em>${lecturesInfo.professor}</em></span>
          <span class="course-separator">•</span>
          <span class="course-university"><em>${lecturesInfo.university}</em></span>
          <span class="course-separator">•</span>
          <span class="course-batch">Batch of ${lecturesInfo.batch}</span>
        </div>
      </div>
      <p class="course-description">${lecturesInfo.description}</p>
    </div>
  `;

  courseWrapper.innerHTML = courseInfoHTML;

  // Add lectures section
  const lecturesSection = document.createElement('div');
  lecturesSection.className = 'lectures-section';
  lecturesSection.innerHTML = '<h4 class="subsection-title">Lectures</h4>';

  const lecturesGrid = document.createElement('div');
  lecturesGrid.className = 'lectures-grid';
  lectures.forEach(lecture => {
    lecturesGrid.innerHTML += createLectureCard(lecture);
  });
  lecturesSection.appendChild(lecturesGrid);
  courseWrapper.appendChild(lecturesSection);

  // Add tutorials section
  const tutorialsSection = document.createElement('div');
  tutorialsSection.className = 'tutorials-section';
  tutorialsSection.innerHTML = '<h4 class="subsection-title">Tutorials</h4>';

  const tutorialsGrid = document.createElement('div');
  tutorialsGrid.className = 'tutorials-grid';
  tutorials.forEach(tutorial => {
    tutorialsGrid.innerHTML += createTutorialCard(tutorial);
  });
  tutorialsSection.appendChild(tutorialsGrid);
  courseWrapper.appendChild(tutorialsSection);

  // Add the entire wrapped course section to container
  container.appendChild(courseWrapper);
}

// Load lectures when DOM is ready
document.addEventListener("DOMContentLoaded", loadLectures);
