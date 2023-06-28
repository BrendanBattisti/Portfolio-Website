const projectData = [
  {
    title: "Portfolio Website",
    path: "portfolio",
    image: "portfoliowebsite.png",
    skills: ["React"],
    link: "https://brendanbattisti.github.io/Portfolio-Website/",
  },
  {
    title: "Dutch/English Classifier",
    path: "classifier",
    image: "portfoliowebsite.png",
    skills: [
      "Python",
      "Machine Learning",
      "Natural Language Processing",
      "Web Scraping",
    ],
    link: "https://brendanbattisti.github.io/Portfolio-Website/",
  },
  {
    title: "Web Dashboard",
    path: "dashboard",
    image: "portfoliowebsite.png",
    skills: ["Python", "React", "Web Developement", "Node.js"],
    link: "https://brendanbattisti.github.io/Portfolio-Website/",
  },

  {
    title: "Beef Estore",
    path: "estore",
    image: "portfoliowebsite.png",
    skills: ["Java Spring", "Angular", "Scrum"],
    link: "https://brendanbattisti.github.io/Portfolio-Website/",
  },
];

const projectImages = require.context("../../img/Projects/", true);

export const ProjectsData = projectData.map((data, index) => {
  const new_data = data;
  new_data.key = `Project${index}`;
  new_data.image = projectImages(`./${data.image}`);
  return new_data;
});
