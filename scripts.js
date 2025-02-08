// Sample project data
const projects = [
    {
        name: "Project 1",
        description: "This is a description of Project 1.",
        link: "https://github.com/phwnEZ/hemptopia"
    },
    {
        name: "Project 2",
        description: "This is a description of Project 2.",
        link: "https://github.com/yourusername/project2"
    },
    {
        name: "Project 3",
        description: "This is a description of Project 3.",
        link: "https://github.com/yourusername/project3"
    }
];

// Function to display projects
function displayProjects() {
    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a href="${project.link}" target="_blank">${project.name}</a>
            <p>${project.description}</p>
        `;
        projectList.appendChild(listItem);
    });
}

// Call the function to display projects when the page loads
window.onload = displayProjects;