document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("projects-container");

    
    fetch("projects.json")
        .then(response => response.json())
        .then(data => displayProjects(data))
        .catch(error => console.error("Error fetching projects:", error));


    function displayProjects(projects) {
        container.innerHTML = ""; 

        projects.forEach(project => {
            const projectElement = document.createElement("div");
            projectElement.classList.add("project");

            projectElement.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-image" />
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank" class="project-link">View Project</a>
            `;

            container.appendChild(projectElement);
        });
    }
});
