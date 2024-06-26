const games = [
    {
        title: "Super Power Evolution Simulator",
        link: "https://www.roblox.com/games/12585099889/Super-Power-Evolution-Simulator",
        image: "spes.webp",
        description: "Ore system - Fixed some bugs - a lot more things"
    },
    {
        title: "Army Life Simulator",
        link: "https://www.roblox.com/games/10279525112/Turkish-Soldier-Simulator",
        image: "teaf.webp",
        description: "Fixed A Lot Of Bugs - ReWritten Ui Scripts"
    },
    {
        title: "Bronx Streets 2",
        link: "https://www.roblox.com/games/17322605921/SCAMMING-Bronx-Streets-2",
        image: "bronx.webp",
        description: "Gore System - Gun Fixes - A Lot More Things"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const gamesContainer = document.querySelector(".games");

    games.forEach(game => {
        const gameElement = document.createElement("div");
        gameElement.classList.add("game", "fade-in");

        gameElement.innerHTML = `
            <h3><a href="${game.link}" target="_blank">${game.title}</a></h3>
            <img src="${game.image}" alt="${game.title}" class="game-img">
            <p>${game.description}</p>
            <a href="${game.link}" target="_blank"><button>Play Now</button></a>
        `;

        gamesContainer.appendChild(gameElement);
    });
});