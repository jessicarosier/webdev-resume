let images = [
    "img/usn.jpeg",
    "img/lulumahu_falls.jpeg",
    "img/jess3.jpeg"
];


let projects = [
    {
        name: "Favorite Movies App",
        description: "This web app allows users to search for movies and add them to a list of favorites. The app uses the TMDB API to search for movies and retrieve movie data as well as a local JSON database to store the list of favorite movies. Technologies used include HTML, CSS, JavaScript, bootstrap, and JSON server.",
        img: "img/preview/movies-mbp.jpeg",
        github: "https://github.com/jessicarosier/favorite-movies-app",
        liveSite: "https://movies-app.jessicarosier.com"
    },
    {
        name: "Weather Map",
        description: "This is a weather app created using HTML, CSS, and JavaScript. The app uses the OpenWeatherMap API to retrieve weather data for a given location as well as the MapBox API to display a map of the location.",
        img: "img/preview/weather-mbp.jpeg",
        github: "https://github.com/jessicarosier/weather-map",
        liveSite: "https://weather-map.jessicarosier.com/"
    },
    {
        name: "Coffee Project",
        description: "This is a simple website demonstrating the use of HTML, CSS,and DOM manipulation with JavaScript. The website is a single page that displays information about coffee. Users can search for coffee by name, or roast type and add new coffee to the page. Local storage is used to make the newly added coffee persist on the page.",
        img: "img/preview/coffee-mbp.jpeg",
        github: "https://github.com/jessica-nani-coffee-project/coffee-project/tree/main",
        liveSite: "https://coffee.jessicarosier.com"
    },

    {
        name: "Ducklister",
        description: "Ducklister is a full stack web application that allows a niche community of jeep enthusiasts to share their love for rubber ducks. Users can register for a new account, edit their profile, list ducks they want to share, and engage with fellow duck lovers. Technologies used include HTML, CSS, JavaScript, Java, and MySQL. Ducklister was mapped using servlets, and JSPs were used to generate HTML pages. Prepared statements were used to prevent SQL injection, and BCrypt algorithm was used to hash passwords.",
        img: "img/preview/ducklister-mbp.jpeg",
        github: "https://github.com/Genesis-Luis-Jessica-Adlister/ducklister",
        liveSite: "none"
    },

    {
        name: "Map-Share",
        description: "Map-Share is a full stack web application that allows users to document their travels and share their experiences with others. Users can register for a new account, edit their profile, and create custom maps to document the countries they have visited. Technologies used include HTML, CSS, JavaScript, Java, MySQL, Spring Boot, and Thymeleaf. Map-Share was mapped using Spring Boot, and Thymeleaf was used to generate HTML pages. RESTful APIs were used to retrieve data from the database and display it on the front end. The Mapbox API was used to display maps and FileStack API was used to upload images. This project was completed as part of the Software Development Bootcamp at Codeup and was deployed with Dokku.",
        img: "img/preview/mapshare-mbp.jpeg",
        github: "https://github.com/Mapstone-Capstone/Mapstone",
        liveSite: "https://map-share.net/",
    }
];


let certifications = [
    {
        name: "Securtiy+",
        link: "https://www.credly.com/badges/469f4921-f554-4952-9365-c89947f5c373/public_url",
        img: "img/certs/sec_plus.png",
    },
    {
        name: "Cloud+",
        link: "https://www.credly.com/badges/0b165358-b5c7-4423-8170-c21a5278f2d4/public_url",
        img: "img/certs/cloud_plus.png",
    },
    {
        name: "Network+",
        link: "https://www.credly.com/badges/6ee6a226-61b4-4a86-a714-3db9ebea20e1/public_url",
        img: "img/certs/network_plus.png",
    },
    {
        name: "Server+",
        link: "https://www.credly.com/badges/a9756f7e-7749-4aff-bde8-c5a89e9785c3/public_url",
        img: "img/certs/server_plus.png",
    },
    {
        name: "Microsoft Certified: Azure Fundamentals",
        link: "https://www.credly.com/badges/5fc16da2-789f-4f3f-b364-d7f1036636c7/public_url",
        img: "img/certs/azure_fundamentals.png",
    },
    {
        name: "AWS Certified Cloud Practitioner",
        link: "https://www.credly.com/badges/726fc5d4-c2b3-494a-b135-be48817d1bee/public_url",
        img: "img/certs/aws_practitioner.png",
    }
];

let skills = [
    {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        type: "front-end"
    },
    {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        type: "front-end"
    },
    {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        type: "front-end"
    },
    {
        name: "jQuery",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
        type: "front-end"
    },
    {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
        type: "front-end"
    },
    {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg",
        type: "back-end"
    },
    {
        name: "mySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        type: "back-end"
    },
    {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        type: "back-end"
    },

    {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        type: "tools"
    },
    {
        name: "NPM",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        type: "tools"
    },
    {
        name: "Azure",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        type: "tools"
    },
    {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        type: "tools"
    },
    {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        type: "tools"
    },
    {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        type: "tools"
    }
];

export {images, projects, certifications, skills};