// Sample project data
const socials = [
    {
        name: "Youtube",
        description: "My youtube. I upload CS2, TF2, and other gaming related content. ",
        link: "https://www.youtube.com/@phwn"
    },
    {
        name: "Twitch",
        description: "I rarely stream but when I do its here.",
        link: "https://www.twitch.tv/phwnez"
    },
    {
        name: "Github",
        description: "Home of the worst Hemp mod for Minecraft",
        link: "https://github.com/phwnEZ/"
    }
];



// Function to display social
function displaySocials() {
    const socialList = document.getElementById('social-list');

    social.forEach(social => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a href="${social.link}" target="_blank">${social.name}</a>
            <p>${social.description}</p>
        `;
        socialList.appendChild(listItem);
    });
}

// Call the function to display social when the page loads
window.onload = displaySocials;