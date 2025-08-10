const projects = [
  {
    title: "Molecular Dynamics based analysis of protein sequencing through Nanopore",
    description: "We are studying the interations of protein analyte passing through the CsgG nanopore, usually present in Oxford Nanopore Technology (ONT) devices. This would lend us insights into the residues of CsgG which could be altered. By doing so, we aim to enhance sequencing accuracy and efficiency, offering a promising alternative to traditional protein sequencing methods.",
    image: "./pictures/project1.jpg",
    professor: "Prof. Ishaan Gupta",
    university: "DBEB, IIT Delhi",
    startDate: "2024-06-01",
    endDate: "Present",
    status: "ongoing"
  },
  {
    title: "Using AI to generate novel protein sequences",
    description: "We developed a Variational Autoencoder model that created a 3D latent space for a protein family, then implemented a logistic regression classifier to distinguish different GO-annotated proteins within this family. The project culminated in the successful generation of novel protein sequences that were statistically indistinguishable from original sequences, as validated by their embedding distances on a Poincare ball hyperboloid.",
    image: "./pictures/project2.jpg",
    professor: "Prof. Vincenzo Carnevale",
    university: "ICMS, Temple University",
    startDate: "2024-05-15",
    endDate: "2024-07-31",
    status: "completed"
  },

  {
    title: "Understanding Nicotine Addiction",
    description: "We simulated the unbinding process of Acetylcholine from the M2R-Go protein complex using specialized molecular dynamics techniques, comparing how the full structure behaves versus just the transmembrane region to understand G protein effects. The analysis revealed important residues, loop interactions, and binding pocket changes during the unbinding process, while energy calculations helped identify critical high-energy conformational changes.",
    image: "./pictures/project3.jpg",
    professor: "Prof. Tapan Kumar Nayak",
    university: "KSBS, IIT Delhi",
    startDate: "2023-01-15",
    endDate: "2025-05-24",
    status: "completed"
  },
  {
    title: "Tunable biosurfactant production using recombinant <i>E. coli</i>",
    description: "We engineered <i>E. coli</i> to produce Alasan and Rhamnolipid biosurfactants using a bi-directional promoter system and evaluated their effectiveness. Additionally, we performed MD simulations to analyze micelle formation by Rhamnolipid in the presence of copper ions and decane, providing insights into their molecular mechanisms.",
    image: "./pictures/project4.jpg",
    professor: "Prof. Preeti Srivastava",
    university: "DBEB, IIT Delhi",
    startDate: "2023-06-01",
    endDate: "2023-10-15",
    status: "completed"
  },
  {
    title: "Designing synthetic microbial community for ammelioration of biotic stress",
    description: "Investigated the biocontrol potential of soil-derived bacterial isolates against the fungus through solid and liquid culture experiments. Evaluated the Plant Growth Promoting (PGP) traits of promising bacterial candidates to identify effective biocontrol agents for sustainable agricultural practices.",
    image: "./pictures/project5.png",
    professor: "Prof. Shilpi Sharma",
    university: "DBEB, IIT Delhi",
    startDate: "2022-12-06",
    endDate: "2023-04-03",
    status: "completed"
  },
];

// Function to format date as "MMM YYYY"
function formatDate(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${month} ${year}`;
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

  placard.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="project-image">
    <div class="project-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
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
