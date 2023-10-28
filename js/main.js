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
        description: "This web app allows users to search for movies and add them to a list of favorites. The app uses the TMDB API to search for movies and retrieve movie data as well as a local JSON database to store the list of favorite movies. Technologies used include HTML, CSS, JavaScript, bootstrap, and JSON server.",
        demo: "video/fav-movie-app-demo.mp4",
        github: "https://github.com/jessicarosier/favorite-movies-app",
        liveSite: "https://movies-app.jessicarosier.com"
    },
    {
        name: "Weather Map",
        description: "This is a weather app created using HTML, CSS, and JavaScript. The app uses the OpenWeatherMap API to retrieve weather data for a given location as well as the MapBox API to display a map of the location.",
        demo: "video/weather-map-demo.mp4",
        github: "https://github.com/jessicarosier/weather-map",
        liveSite: "https://weather-map.jessicarosier.com/"
    },
    {
        name: "Coffee Project",
        description: "This is a simple website for a coffee shop created using HTML, CSS, and JavaScript. This site uses local storage to make data persistent.",
        demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        github: "",
        liveSite: "https://coffee.jessicarosier.com"
    }
];

let certifications = [
    {
        name: "Securtiy+",
        link: "https://www.credly.com/earner/earned/badge/469f4921-f554-4952-9365-c89947f5c373",
        img: "img/sec_plus.png",
    },
    {
        name: "Cloud+",
        link: "https://www.credly.com/earner/earned/badge/0b165358-b5c7-4423-8170-c21a5278f2d4",
        img: "img/cloud_plus.png",
    },
    {
        name: "Network+",
        link: "https://www.credly.com/earner/earned/badge/6ee6a226-61b4-4a86-a714-3db9ebea20e1",
        img: "img/network_plus.png",
    },
    {
        name: "Microsoft Certified: Azure Fundamentals",
        link: "https://www.credly.com/earner/earned/badge/5fc16da2-789f-4f3f-b364-d7f1036636c7",
        img: "img/azure_fundamentals.png",
    },
    {
        name: "AWS Certified Cloud Practitioner",
        link: "https://www.credly.com/earner/earned/badge/726fc5d4-c2b3-494a-b135-be48817d1bee",
        img: "img/aws_practitioner.png",
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


//builds the project cards
function renderCerts(cert) {
    let certCard = document.createElement("div");
    certCard.classList.add("project-card");
    certCard.innerHTML = `
    <img src="${cert.img}" class="cert-img">
      <a class="button text-center" href="${cert.link}" target="_blank">  View Certification  </a>`;
    document.querySelector(".certs-container").appendChild(certCard);
}

certifications.forEach((cert) => {
    renderCerts(cert);
});










