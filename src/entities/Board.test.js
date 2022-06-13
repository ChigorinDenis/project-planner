import Board from './Board';
import { projectList } from '../mockdata';

describe('Testing class Board', () => {
  const board = new Board();
  projectList.map((project) => { board.addProject(project)});

  test('Checking number projects after adding', () => {
    expect(board.activeProjects.length).toBe(3);
    expect(board.finishedProjects.length).toBe(0);
  })

  test('Checking getting finished & active project after action = finish', () => {
    const firstProject = board.getProjectById('p1');
    firstProject.finish();
    expect(board.activeProjects.length).toBe(2);
    expect(board.finishedProjects.length).toBe(1);
  })

  test('Checking working methods activateProjet & finishProject', () => {
    board.finishProject('p2');
    expect(board.activateProject.length).toBe(1);
    expect(board.finishedProjects.length).toBe(2);
    board.activateProject('p1');
    board.activateProject('p2');
    expect(board.activeProjects.length).toBe(3);
    expect(board.finishedProjects.length).toBe(0);
  })

});