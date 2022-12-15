let projects = [
  {
    "project-image": "images/goodfight.png",
    "project-image-alt": "goodfight-img",
    "project-name": "The Goodfight",
    "project-brief": "JavaFX application for Non-profit.",
  },
  {
    "project-image": "images/personal-webpage.png",
    "project-image-alt": "webpage-img",
    "project-name": "First Personal Webpage",
    "project-brief": "Personal website made with HTML/CSS.",
  },
  {
    "project-image": "images/bills-burgers.png",
    "project-image-alt": "bills-burgers-img",
    "project-name": "Restaurant Website",
    "project-brief": "HTML/CSS site made to practice.",
  },
];

document.addEventListener("DOMContentLoaded", loadContent);

function loadContent() {
  addProjects();
}

function addProjects() {
  let projectContainer = document.getElementById("projects");

  projects.forEach((project) => {
    var projectCard = document.createElement("div");
    projectCard.className = "project-card";

    var projectImg = document.createElement("img");
    projectImg.setAttribute("src", project["project-image"]);
    projectImg.setAttribute("alt", project["project-image-alt"]);
    projectCard.appendChild(projectImg);

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
  });
}
