document.addEventListener("DOMContentLoaded", () => {
  const projectsContainer = document.getElementById("projects-container");
  const techSort = document.getElementById("tech-sort");

  // Sample JSON data (or fetch dynamically)
  const projects = [
    {
      id: 1,
      title: "HTML Sloth Project",
      description: "Encyclopedia of Sloths!",
      technologies: ["HTML"],
      images: ["images/sloth.jpg"],
      link: "https://jessplotkin.github.io/wa/wa3/wa3.html"
    },
    {
      id: 2,
      title: "CSS Project",
      description: "Group Project, website for Colorado Symphony",
      technologies: ["CSS"],
      images: ["images/symphony.jpg"],
      link: "https://jessplotkin.github.io/JAGTeam_css_repo/orchestra.html"
    },
    {
      id: 3,
      title: "My JS Image Carousel Project",
      description: "Image Carousel of my life in Boulder, CO",
      technologies: ["JavaScript"],
      images: ["images/boulder.jpeg"],
      link: "https://jessplotkin.github.io/wa11/wa11.html"
    }
  ];

  // Function to render projects dynamically
  function renderProjects(filteredProjects) {
    projectsContainer.innerHTML = ""; // Clear existing content
    filteredProjects.forEach(project => {
      const projectHTML = `
        <div class="project">
          <h2>${project.title}</h2>
          <img src="${project.images[0]}" alt="${project.title}" class="project-img">
          <p>${project.description}</p>
          <a href="${project.link}" class="project-link" target="_blank">View Project</a>
        </div>
      `;
      projectsContainer.insertAdjacentHTML("beforeend", projectHTML);
    });
  }

  // Initial render of all projects
  renderProjects(projects);

  // Sorting function
  techSort.addEventListener("change", (event) => {
    const selectedTech = event.target.value;
    if (selectedTech === "all") {
      renderProjects(projects); // Show all projects
    } else {
      const filteredProjects = projects.filter(project =>
        project.technologies.includes(selectedTech)
      );
      renderProjects(filteredProjects); // Show filtered projects
    }
  });
});


  