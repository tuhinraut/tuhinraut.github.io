const projects = [
  {
    title: "Molecular Dynamics based analysis of protein sequencing through Nanopore",
    description: "We are studying the interations of protein analyte passing through the CsgG nanopore, usually present in Oxford Nanopore Technology (ONT) devices. We aim to enhance sequencing accuracy and efficiency, offering a promising alternative to traditional protein sequencing methods.",
    image: "./pictures/project1.jpg",
    professor: "Prof. Ishaan Gupta",
    university: "DBEB, IIT Delhi",
    startDate: "2024-06-01",
    endDate: "Present",
    status: "ongoing",
    papers: []
  },
  {
    title: "Using AI to generate novel protein sequences",
    description: "We developed a Variational Autoencoder model that created a 3D latent space for a protein family, then implemented a logistic regression classifier to distinguish different GO-annotated proteins within this family. The project culminated in the successful generation of novel protein sequences that were statistically indistinguishable from original sequences, as validated by their embedding distances on a Poincare ball hyperboloid.",
    image: "./pictures/project2.jpg",
    professor: "Prof. Vincenzo Carnevale",
    university: "ICMS, Temple University",
    startDate: "2024-05-15",
    endDate: "2024-07-31",
    status: "completed",
    github: "https://github.com/tuhinraut/VAE-GAN-based-Protein-Generator",
    papers: []
  },

  {
    title: "Exploring Allosteric Communication in GPCR",
    description: "We simulated the unbinding process of Acetylcholine from the M2R-Go protein complex using specialized molecular dynamics techniques, comparing how the full structure behaves versus just the transmembrane region to understand G protein effects. The analysis revealed important residues for the allosteric communication, loop interactions, and binding pocket changes during the unbinding process, while energy calculations helped identify critical high-energy conformational changes.",
    image: "./pictures/project3.jpg",
    professor: "Prof. Tapan Kumar Nayak",
    university: "KSBS, IIT Delhi",
    startDate: "2023-01-15",
    endDate: "2025-05-24",
    status: "completed",
    papers: []
  },
  {
    title: "Tunable biosurfactant production using recombinant <i>E. coli</i>",
    description: "We engineered <i>E. coli</i> to produce Alasan and Rhamnolipid biosurfactants using a bi-directional promoter system and evaluated their effectiveness. Additionally, we performed MD simulations to analyze micelle formation by Rhamnolipid in the presence of copper ions and decane, providing insights into their molecular mechanisms.",
    image: "./pictures/project4.jpg",
    professor: "Prof. Preeti Srivastava",
    university: "DBEB, IIT Delhi",
    startDate: "2023-06-01",
    endDate: "2023-10-15",
    status: "completed",
    papers: [
      {
        title: "Recent advancements in the application of biosurfactants for the treatment of textile waste and industrial effluents (2025)",
        authors: "Raut, T. K., Dhanoa, P., Jayakumar, A., Srivastava, P., Sundar, D.",
        journal: "Biosurfactants for a Sustainable Textiles Industry, Royal Society of Chemistry",
        status: "published",
        type: "chapter",
        link: "https://doi.org/10.1039/9781837679744"
      }
    ]
  },
  {
    title: "Designing synthetic microbial community for ammelioration of biotic stress",
    description: "Investigated the biocontrol potential of soil-derived bacterial isolates against the fungus through solid and liquid culture experiments. Evaluated the Plant Growth Promoting (PGP) traits of promising bacterial candidates to identify effective biocontrol agents for sustainable agricultural practices.",
    image: "./pictures/project5.png",
    professor: "Prof. Shilpi Sharma",
    university: "DBEB, IIT Delhi",
    startDate: "2022-12-06",
    endDate: "2023-04-03",
    status: "completed",
    papers: [
      {
        title: "A novel functional screening based method for generation of synthetic microbial community: Case study with control of Fusarium wilt in pigeonpea (2025)",
        authors: "Tyagi, R., Srivastava, S., Raut, T. K., Kartha, S., Sharma, S.",
        journal: "Plant Biology, Wiley Publication",
        status: "published",
        type: "article",
        link: "http://doi.org/10.1111/plb.70092"
      }
    ]
  },
];

// Function to format date as "MMM YYYY"
function formatDate(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}

// Function to create papers HTML
function createPapersHTML(papers) {
  if (!papers || papers.length === 0) {
    return "";
  }

  const papersHTML = papers.map(paper => {
    const statusClass = paper.status === "published" ? "paper-published" :
                       paper.status === "under review" ? "paper-under-review" : "paper-accepted";

    const typeClass = paper.type === "article" ? "paper-type-article" :
                     paper.type === "chapter" ? "paper-type-chapter" : "paper-type-review";

    const paperTitle = paper.link && paper.link !== "#" ?
      `<a href="${paper.link}" target="_blank" class="paper-link">${paper.title}</a>` :
      paper.title;

    // Highlight Raut, T. K. in authors list
    const highlightedAuthors = paper.authors ?
      paper.authors.replace(/Raut,\s*T\.\s*K\./g, '<span class="highlighted-author">Raut, T. K.</span>') : '';

    return `
      <div class="paper-item">
        <div class="paper-title">${paperTitle}</div>
        ${paper.authors ? `<div class="paper-authors">${highlightedAuthors}</div>` : ''}
        <div class="paper-details">
          <span class="paper-journal"><em>${paper.journal}</em></span>
          <div class="paper-badges">
            <span class="paper-type ${typeClass}">${paper.type}</span>
            <span class="paper-status ${statusClass}">${paper.status}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  return `
    <div class="papers-section">
      <h4 class="papers-title">Publications:</h4>
      <div class="papers-list">
        ${papersHTML}
      </div>
    </div>
  `;
}

// Function to create GitHub link HTML
function createGithubHTML(githubUrl) {
  if (!githubUrl) {
    return "";
  }

  return `
    <div class="github-section">
      <a href="${githubUrl}" target="_blank" class="github-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
        <span>View on GitHub</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
    </div>
  `;
}

// Function to create project placard HTML
function createProjectPlacard(project) {
  const placard = document.createElement("div");
  placard.className = "project-placard";

  // Format start and end dates
  const startDate = formatDate(project.startDate);
  const endDate = project.status === "ongoing" ? "Present" : formatDate(project.endDate);

  // Italicize professor and university
  const professorUniversity = `<em>${project.professor} (${project.university})</em>`;

  // Create GitHub HTML
  const githubHTML = createGithubHTML(project.github);

  // Create papers HTML
  const papersHTML = createPapersHTML(project.papers);

  placard.innerHTML = `
    <div class="project-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      ${githubHTML}
      ${papersHTML}
      <div class="project-details">
        <div class="info">${professorUniversity}</div>
        <div class="date"><em>${startDate} - ${endDate}</em></div>
      </div>
    </div>
  `;
  return placard;
}

// Function to sort projects: ongoing first, then completed
function sortProjects(projects) {
  const ongoing = projects.filter(p => p.status === "ongoing")
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate)); // Latest first
  const completed = projects.filter(p => p.status === "completed")
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate)); // Latest first
  return [...ongoing, ...completed];
}

// Function to load projects into the container
function loadProjects() {
  const container = document.getElementById("projects-container");
  const sortedProjects = sortProjects(projects);

  sortedProjects.forEach(project => {
    const placard = createProjectPlacard(project);
    container.appendChild(placard);
  });
}

// Load projects when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadProjects);
