// Sample social data
const socials = [
    {
        name: "Youtube",
        description: "My youtube. I upload CS2, TF2, and other gaming related content.",
        link: "https://www.youtube.com/@phwn"
    },
    {
        name: "Twitch",
        description: "I rarely stream but when I do it's here.",
        link: "https://www.twitch.tv/phwnez"
    },
    {
        name: "Github",
        description: "Home of the worst Hemp mod for Minecraft",
        link: "https://github.com/phwnEZ/"
    }
];

// Sample project data
const projects = [
    {
        name: "Hemp Mod for Minecraft",
        description: "A Minecraft mod that adds hemp and related items.",
        link: "https://github.com/phwnEZ/hemp-mod"
    },
    {
        name: "CS2 Highlights",
        description: "A collection of my best CS2 moments.",
        link: "https://youtube.com/@phwn"
    }
];

// Function to display socials
function displaySocials() {
    const socialList = document.getElementById('socials-list');

    socials.forEach(social => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a href="${social.link}" target="_blank">${social.name}</a>
            <p>${social.description}</p>
        `;
        socialList.appendChild(listItem);
    });
}

// Function to display projects
function displayProjects() {
    const projectList = document.getElementById('projects-list');

    projects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a href="${project.link}" target="_blank">${project.name}</a>
            <p>${project.description}</p>
        `;
        projectList.appendChild(listItem);
    });
}

// Call the functions to display socials and projects when the page loads
window.onload = function () {
    displaySocials();
    displayProjects();
};