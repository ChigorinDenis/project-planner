import Project from "./Project";

describe('Testing class Project', () => {
  const project = new Project(1, 'title', 'text', 'info');
  test('Test finish method', () => {
    expect(project.status).toBe('active');
    project.finish();
    expect(project.status).toBe('finished');
  })
  test('Test avivate method', () => {
    expect(project.status).toBe('finished');
    project.activate();
    expect(project.status).toBe('active');
  })

})
