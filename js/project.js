let projects = [
  {
    "project-id": "goodfight",
    "project-image": "images/assets/goodfight.png",
    "project-image-alt": "goodfight-img",
    "project-name": "The Goodfight",
    "project-brief": "JavaFX application for Non-profit.",
    "project-url": "https://github.com/dakota-kallas/GoodFight-JavaFX-App",
  },
  {
    "project-id": "webpage",
    "project-image": "images/assets/personal-webpage.png",
    "project-image-alt": "webpage-img",
    "project-name": "First Personal Webpage",
    "project-brief": "Personal website made with HTML/CSS.",
    "project-url": "https://github.com/dakota-kallas/Personal-Webpage",
  },
  {
    "project-id": "bills-burgers",
    "project-image": "images/assets/bills-burgers.png",
    "project-image-alt": "bills-burgers-img",
    "project-name": "Restaurant Website",
    "project-brief": "HTML/CSS site made to practice.",
    "project-url": "https://github.com/dakota-kallas/Restaurant-Site",
  },
  {
    "project-id": "compiler",
    "project-image": "images/assets/compiler.png",
    "project-image-alt": "compiler-img",
    "project-name": "Mini-C Compiler",
    "project-brief": "Compiler written for a C-like language.",
    "project-url": "https://github.com/dakota-kallas/Mini-C-Compiler",
  },
  {
    "project-id": "weather-collection",
    "project-image": "images/assets/weather-collection.png",
    "project-image-alt": "weather-collection-img",
    "project-name": "Weather Collection",
    "project-brief": "A simple site demonstrating AJAX.",
    "project-url": "https://github.com/dakota-kallas/Weather-Collection",
  },
  {
    "project-id": "huffman",
    "project-image": "images/assets/huffman.png",
    "project-image-alt": "huffman-img",
    "project-name": "Huffman Encoder/Decoder",
    "project-brief": "Encoder and decoder using Huffman Trees.",
    "project-url": "https://github.com/dakota-kallas/Huffman-Encoder-Decoder",
  },
];

window.onload = loadContent;

function loadContent() {
  addProjects();
}

function addProjects() {
  let projectContainer = document.getElementById("projects");

  projects.forEach((project) => {
    var projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.id = project["project-id"];
    projectCard.URL = project["project-url"];

    var projectImgContainer = document.createElement("div");
    projectImgContainer.className = "project-img-container";
    var projectImg = document.createElement("img");
    projectImg.setAttribute("src", project["project-image"]);
    projectImg.setAttribute("alt", project["project-image-alt"]);
    projectImgContainer.appendChild(projectImg);
    projectCard.appendChild(projectImgContainer);

    var projectDescriptionContainer = document.createElement("div");
    projectDescriptionContainer.className = "project-description-container";

    var projectName = document.createElement("h1");
    var projectNameText = document.createTextNode(project["project-name"]);
    projectName.appendChild(projectNameText);
    projectDescriptionContainer.appendChild(projectName);

    var projectBrief = document.createElement("h2");
    var projectBriefText = document.createTextNode(project["project-brief"]);
    projectBrief.appendChild(projectBriefText);
    projectDescriptionContainer.appendChild(projectBrief);

    projectCard.appendChild(projectDescriptionContainer);

    projectContainer.appendChild(projectCard);
    projectCard.addEventListener("mouseenter", addProjectHover);
    projectCard.addEventListener("mouseleave", removeProjectHover);
  });
}

function addProjectHover(e) {
  console.log("entered");
  var projectCard = e.currentTarget;
  var projectImgContainer = projectCard.firstChild;
  var projectImg = projectImgContainer.firstChild;
  projectImg.classList += " blurred";

  var viewButtonContent = document.createElement("a");
  viewButtonContent.setAttribute("href", projectCard.URL);
  viewButtonContent.setAttribute("target", "_blank");
  var viewButtonContainer = document.createElement("div");
  viewButtonContainer.className = "view-link";
  var viewButton = document.createElement("p");
  var viewButtonText = document.createTextNode("View");
  viewButtonContainer.appendChild(viewButton);
  viewButton.appendChild(viewButtonText);
  var viewButtonOpen = document.createElement("img");
  viewButtonOpen.setAttribute("src", "images/assets/open.png");
  viewButtonOpen.setAttribute("alt", "open-img");
  viewButtonContainer.appendChild(viewButtonOpen);
  viewButtonContent.appendChild(viewButtonContainer);
  projectImgContainer.appendChild(viewButtonContent);
}

function removeProjectHover(e) {
  console.log("left");
  var projectCard = e.currentTarget;
  var projectImgContainer = projectCard.firstChild;
  var projectImg = projectImgContainer.firstChild;
  projectImg.classList.remove("blurred");
  projectImgContainer.removeChild(projectImgContainer.children[1]);
}
