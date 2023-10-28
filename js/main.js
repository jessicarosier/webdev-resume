console.log("Hello there fellow code warrior! This site is currently under construction :)");

//
let aboutMe = ["Full Stack Web Developer 👩🏽‍💻", "U.S Navy Veteran 🇺🇸⚓️", "Coffee Lover ☕️", "Traveler ✈️", "Lifelong Learner 📚", "Problem Solver 🧐", "Technology Enthusiast 💻"];

let aboutMeDisplay = document.querySelector("#about-me");
let currentIndex = 0;

//loops through the aboutMe array and displays each string in the aboutMeDisplay for 2 seconds, loops indefinitely
function renderAboutMe() {
    if (currentIndex < aboutMe.length) {
        aboutMeDisplay.innerHTML = aboutMe[currentIndex];
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    setTimeout(renderAboutMe, 2000);
}

//calls the renderAboutMe function
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
    {
        name: "Coffee Project",
        description: "This is a simple website for a coffee shop created using HTML, CSS, and JavaScript. Uses local storage to make data persistent. This was a pair programming development project completed in 1 week.",
        demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        github: "",
        liveSite: "https://coffee.jessicarosier.com"
    }
];


let images = [
    "img/usn.jpeg",
    "img/lulumahu_falls.jpeg",
    "img/jess3.jpeg"
];


let currentImgIndex = 0;
const currentImg = document.getElementById("current-img");

//loop through the images array and changes the image displayed in the About Me section every 5 seconds
function changeImage() {
    currentImg.style.opacity = 0;
    setTimeout(function () {
        currentImg.src = images[currentImgIndex];
        currentImgIndex = (currentImgIndex + 1) % images.length;
        currentImg.style.opacity = 1;
    }, 1000); // sets the opacity to 1 after 1 second
}

// calls the changeImage function
setInterval(changeImage, 5000); // changes the image every 5 seconds
changeImage();


//builds the project cards
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








