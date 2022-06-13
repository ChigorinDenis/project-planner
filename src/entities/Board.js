import Project from "./Project";

class Board {
  constructor() {
    this.projects = [];
  }

  addProject = function({title, text, moreInfo})  {
    const id = `p${this.projects.length + 1}`;
    const newProject = new Project(id, title, text, moreInfo);
    this.projects.push(newProject);
  }

  get activeProjects() {
    return this.projects.filter((f) => f.status === 'active');
  }

  get finishedProjects() {
    return this.projects.filter((f) => f.status === 'finished');
  }

  getProjectById = function(id) {
    const findedProject = this.projects.find((project) => project.id === id);
    if (findedProject) {
      return findedProject;
    }
  }

  activateProject = function(id) {
    const findedProject = this.projects.find((project) => project.id === id);
    if (findedProject) {
      findedProject.activate();
    }
  }
  finishProject = function(id) {
    const findedProject = this.projects.find((project) => project.id === id);
    if (findedProject) {
      findedProject.finish();
    }
  }
}

export default Board;