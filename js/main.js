console.log("Hello there!");

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
        img: "img/movies_app_preview.png",
        github: "https://github.com/jessicarosier/favorite-movies-app",
        liveSite: "https://movies-app.jessicarosier.com"
    },
    {
        name: "Weather Map",
        description: "This is a weather app created using HTML, CSS, and JavaScript. The app uses the OpenWeatherMap API to retrieve weather data for a given location as well as the MapBox API to display a map of the location.",
        img: "img/weather_map_preview.png",
        github: "https://github.com/jessicarosier/weather-map",
        liveSite: "https://weather-map.jessicarosier.com/"
    },
    {
        name: "Coffee Project",
        description: "This is a simple website for a coffee shop created using HTML, CSS, and JavaScript. This site uses local storage to make data persistent.",
        img: "img/coffee_preview.png",
        github: "",
        liveSite: "https://coffee.jessicarosier.com"
    },

    {
        name: "Ducklister",
        description: "Ducklister is a full stack web application that allows a niche community of jeep enthusiasts to share their love for rubber ducks by listing and interacting with others. Users can register for a new account, edit their profile, list ducks they want to share, and engage with fellow duck lovers. Technologies used include HTML, CSS, JavaScript, bootstrap, Java, and MySQL. Built on the MVC design pattern, Ducklister was mapped using servlets, and JSPs were used to generate HTML pages. Prepared statements were used to prevent SQL injection, and BCrypt algorithm was used to hash passwords.",
        img: "img/coffee_preview.png",
        github: "",
        liveSite: ""
    }
];

let certifications = [
    {
        name: "Securtiy+",
        link: "https://www.credly.com/badges/469f4921-f554-4952-9365-c89947f5c373/public_url",
        img: "img/sec_plus.png",
    },
    {
        name: "Cloud+",
        link: "https://www.credly.com/badges/0b165358-b5c7-4423-8170-c21a5278f2d4/public_url",
        img: "img/cloud_plus.png",
    },
    {
        name: "Network+",
        link: "https://www.credly.com/badges/6ee6a226-61b4-4a86-a714-3db9ebea20e1/public_url",
        img: "img/network_plus.png",
    },
    {
        name: "Server+",
        link: "https://www.credly.com/badges/a9756f7e-7749-4aff-bde8-c5a89e9785c3/public_url",
        img: "img/server_plus.png",
    },
    {
        name: "Microsoft Certified: Azure Fundamentals",
        link: "https://www.credly.com/badges/5fc16da2-789f-4f3f-b364-d7f1036636c7/public_url",
        img: "img/azure_fundamentals.png",
    },
    {
        name: "AWS Certified Cloud Practitioner",
        link: "https://www.credly.com/badges/726fc5d4-c2b3-494a-b135-be48817d1bee/public_url",
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
    <a href="${project.github}" target="_blank"><img src="img/github-icon.svg" class="git-img"></a>
  
      <p>${project.description}</p>
      <a class="button" href="${project.liveSite}" target="_blank">  Live Site  </a>`;
    document.querySelector(".projects-container").appendChild(projectCard);
}

projects.forEach((project) => {
    renderProjects(project);
});


//builds the cert cards
function renderCerts(cert) {
    let certCard = document.createElement("div");
    certCard.classList.add("cert-card");
    certCard.innerHTML = `
    <img src="${cert.img}" class="cert-img">
      <a class="button text-center" href="${cert.link}" target="_blank">  View Certification  </a>`;
    document.querySelector(".certs-container").appendChild(certCard);
}

certifications.forEach((cert) => {
    renderCerts(cert);
});










