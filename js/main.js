import {images, projects, certifications, skills} from "./data.js";

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

function renderProjects(projects) {
    let projectsContainer = document.querySelector(".projects-container");
    let currentIndx = 0;
    let projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
    <img src="${projects.img}" class="project-img">
    <div class="project-info">
      <h3 class="project-title">${projects.name}</h3>
      <p class="project-description">${projects.description}</p>
      <div class="project-links">
        <a class="button" href="${projects.github}" target="_blank">GitHub</a>
      
      </div>
    `;

    if (projects.liveSite !== "") {
        projectCard.querySelector(".project-links").innerHTML += `
        <a class="button" href="${projects.liveSite}" target="_blank">Live Site</a>
        `;
    }

    let projectCardImg = projectCard.querySelector("img");
    let projectCardTitle = projectCard.querySelector(".project-title");
    let projectCardDescription = projectCard.querySelector(".project-description");
    let projectCardLinks = projectCard.querySelector(".project-links");

    function changeProject() {
        projectCardImg.src = projects[currentIndx].img;
        projectCardTitle.textContent = projects[currentIndx].name;
        projectCardDescription.textContent = projects[currentIndx].description;
        projectCardLinks.innerHTML = `
        <a class="button" href="${projects[currentIndx].github}" target="_blank">GitHub<span class="material-icons">
launch
</span></a>
        <a class="button" href="${projects[currentIndx].liveSite}" target="_blank">Live Site<span class="material-icons">
launch
</span></a>
        `;
    }

    setTimeout(function () {
        changeProject();
        currentIndx = (currentIndx + 1) % projects.length;
        projectsContainer.appendChild(projectCard);

    }, 1000);

    //event listener for when the next button is clicked
    document.querySelector("#next-btn").addEventListener("click", function () {
        changeProject();
        //if the current index is the last index in the array, set the current index to 0, otherwise increment the current index by 1
        if (currentIndx === projects.length) {
            currentIndx = 0;
        } else {
            currentIndx = (currentIndx + 1) % projects.length;
        }

    });

    //event listener for when the previous button is clicked
    document.querySelector("#previous-btn").addEventListener("click", function () {
        changeProject();
        //if the current index is the first index in the array, set the current index to the last index, otherwise decrement the current index by 1
        if (currentIndx === 0) {
            currentIndx = projects.length - 1;
        } else {
            currentIndx = (currentIndx - 1) % projects.length;
        }
    });

}

renderProjects(projects);


//builds the cert cards
function renderCerts(cert) {
    let certCard = document.createElement("div");
    certCard.classList.add("cert-card");
    certCard.innerHTML = `
    <img src="${cert.img}" class="cert-img">
    `;

    document.querySelector(".certs-container").appendChild(certCard);

    //event listener for mouse enter make the cert card with a clickable link overlay
    certCard.addEventListener("mouseenter", function () {
        let certCardOverlay = document.createElement("a");
        certCardOverlay.href = cert.link;
        certCardOverlay.target = "_blank";
        certCardOverlay.classList.add("cert-link");
        certCardOverlay.classList.add("cert-overlay");
        certCardOverlay.textContent = "View Certificate";
        certCardOverlay.innerHTML += `
         <span class="material-icons">
launch
</span>`;
        certCard.querySelector(".cert-img").style.filter = "blur(5px)";
        certCard.appendChild(certCardOverlay);
    });

    //event listener for mouse leave make the cert card not clickable
    certCard.addEventListener("mouseleave", function () {
        certCard.querySelector(".cert-img").style.filter = "blur(0px)";
        certCard.querySelector(".cert-overlay").remove();
    });
}

certifications.forEach((cert) => {
    renderCerts(cert);
});


//builds the skill cards in three columns
let frontEndCol = document.createElement("div");
frontEndCol.classList.add("col");
frontEndCol.classList.add("skills-col");
let backEndCol = document.createElement("div");
backEndCol.classList.add("col");
backEndCol.classList.add("skills-col");
let toolsCol = document.createElement("div");
toolsCol.classList.add("col");
toolsCol.classList.add("skills-col");

frontEndCol.innerHTML = `
<h3 class="skills-col-title text-center">Front End</h3>
<div class="front-end-skills wrap-skills">
</div>
`;

backEndCol.innerHTML = `
<h3 class="skills-col-title text-center">Back End</h3>
<div class="back-end-skills wrap-skills">
</div>
`;

toolsCol.innerHTML = `
<h3 class="skills-col-title text-center">Tools</h3>
<div class="tools wrap-skills">
</div>
`;

function renderSkills(skill) {
    let frontEndSkills = frontEndCol.querySelector(".front-end-skills");
    let backEndSkills = backEndCol.querySelector(".back-end-skills");
    let tools = toolsCol.querySelector(".tools");


    let skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");
    skillCard.innerHTML = `
    <img src="${skill.icon}" class="skill-icon">
    <p class="skill-name">${skill.name}</p>
    `;
    if (skill.type === "front-end") {
        frontEndSkills.appendChild(skillCard);
    } else if (skill.type === "back-end") {
        backEndSkills.appendChild(skillCard);
    } else {
        tools.appendChild(skillCard);
    }

    const skillsContainer = document.querySelector(".skills-container");
    skillsContainer.appendChild(frontEndCol);
    skillsContainer.appendChild(backEndCol);
    skillsContainer.appendChild(toolsCol);
}

skills.forEach((skill) => {
    renderSkills(skill);
});


//event listener for when the hamburger menu is clicked
const sideMenu = document.querySelector(".side-menu");
const openMenuButton = document.querySelector(".open-menu");
const closeMenuButton = document.querySelector(".close-menu");

//function to open the side menu
function openMenu(e) {
    e.preventDefault();
    sideMenu.style.right = "0";
}

if (openMenuButton) {
    openMenuButton.addEventListener("click", openMenu);
}

//function to close the side menu
function closeMenu(e) {
    e.preventDefault();
    sideMenu.style.right = "-300px";
}

if (closeMenuButton) {
    closeMenuButton.addEventListener("click", closeMenu);
}










