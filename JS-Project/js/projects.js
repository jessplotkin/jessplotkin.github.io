document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("projects-container");

    // Fetch project data from the JSON file
    fetch("projects.json")
        .then(response => response.json())
        .then(data => displayProjects(data))
        .catch(error => console.error("Error fetching projects:", error));

    // Function to display projects dynamically
    function displayProjects(projects) {
        container.innerHTML = ""; // Clear container

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
