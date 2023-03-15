export{}

interface Project {
 id: number;
    name: string;
    image: string;
    link: string;
    members: number;
  };

  const projectList : Project[] =[
    {
        id:1,
        name:"Hà",
        image:"abc",
        link:"abc",
        members:2
    },
    {
        id:2,
        name:"Hà",
        image:"abc",
        link:"abc",
        members:2
    },
    {
        id:3,
        name:"Hà",
        image:"abc",
        link:"abc",
        members:2
    }
]

  function listProject(projectLists: Project[]): void {
    const app = document.getElementById("app");
    app.innerHTML = "";
    projectLists.forEach((project) => {
      const { id, name, image, link, members } = project;
      const projectHtml = `
        <div class="project">
          <img src="${image}" alt="${name}" />
          <h3>${name}</h3>
          <p>Members: ${members}</p>
          <a href="${link}">View project</a>
        </div>
      `;
      app.innerHTML += projectHtml;
    });
  }
  
  listProject(projectList)