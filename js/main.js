console.log("Hello there fellow code warrior! This site is currenlty under construction :)");

let aboutMe = ["Full Stack Web Developer 👩🏽‍💻", "U.S Navy Veteran 🇺🇸⚓️", "Coffee Lover ☕️", "Traveler ✈️", "Lifelong Learner 📚", "Problem Solver 🧐", "Technology Enthusiast 💻"];

let aboutMeDisplay = document.querySelector("#about-me");
let currentIndex = 0;

function renderAboutMe() {
    if (currentIndex < aboutMe.length) {
        aboutMeDisplay.innerHTML = aboutMe[currentIndex];
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    setTimeout(renderAboutMe, 2000);
}

renderAboutMe();


let projects = [
    {
        name: "Favorite Movies App",
        description: "This web app allows users to search for movies and add them to a list of favorites. The app uses the TMDB API to search for movies and retrieve movie data as well as a local JSON database to store the list of favorite movies. This was a pair programming development project completed in 1 week.",
        demo: "video/fav-movie-app-demo.mp4",
        github: "https://github.com/jessicarosier/favorite-movies-app",
        liveSite: "https://movies-app.jessicarosier.com"
    },

    {
        name: "Weather Map",
        description: "This is a weather app created using HTML, CSS, and JavaScript. The app uses the OpenWeatherMap API to retrieve weather data for a given location as well as the MapBox API to display a map of the location. This project was completed in 3 days.",
        demo: "video/weather-map-demo.mp4",
        github: "https://github.com/jessicarosier/weather-map",
        liveSite: "https://weather-map.jessicarosier.com/"
    },

    // {
    //     name: "Tic Tac Toe",
    //     description: "This is a simple tic tac toe game created using HTML, CSS, and JavaScript. The game allows two players to play against each other and keeps track of the score. This project was completed in 3 days.",
    //     demo: "video/tic-tac-toe-demo.mp4",
    //     github: "https://github.com/jessicarosier/tic-tac-toe",
    //     liveSite: ""
    // },
    //
    // {
    //     name: "Calculator",
    //     description: "This is a simple calculator created using HTML, CSS, JavaScript and jQuery. The calculator allows users to perform basic math operations. This project was completed in 3 days.",
    //     demo: "video/calculator-demo.mp4",
    //     github: "https://github.com/jessicarosier/calculator",
    //     liveSite: ""
    // },

    {
        name: "Coffee Project",
        description: "This is a simple website for a coffee shop created using HTML, CSS, and JavaScript. Uses local storage to make data persistent. This was a pair programming development project completed in 1 week.",
        demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        github: "",
        liveSite: "https://coffee.jessicarosier.com"
    }
];


function renderProjects(project) {
    let projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
<h3>${project.name}</h3>
    <a href="${project.github}" target="_blank"><img src="img/github.svg" class="git-img"></a>

      <p>${project.description}</p>

      <a class="button" href="${project.liveSite}" target="_blank">  Live Site  </a>`;

    document.querySelector(".projects-container").appendChild(projectCard);

}

projects.forEach((project) => {
    renderProjects(project);
});








