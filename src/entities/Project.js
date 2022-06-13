class Project{
  constructor(id, title, text, moreInfo) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.moreInfo = moreInfo;
    this.status = 'active';
  }
  
  activate = function() {
    this.status = 'active';
    return this.status;
  }

  finish = function() {
    this.status = 'finished';
    return this.status;
  }

}

export default Project;