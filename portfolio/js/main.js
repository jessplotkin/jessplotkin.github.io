fetch("data/projects.json")
  .then(response => response.json())
  .then(data => {
    const projectsContainer = document.getElementById("projects");
    data.projects.forEach(project => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");
      projectCard.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <p>Technologies: ${project.technologies.join(", ")}</p>
        <a href="${project.link}">View Project</a>
      `;
      projectsContainer.appendChild(projectCard);
    });
  })
  .catch(error => console.error("Error loading JSON:", error));
