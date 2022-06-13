import React  from 'react';
import Header from './components/Header';
import BoardDisplay from './components/BoardDisplay/BoardDisplay';
import Board from './entities/Board';
import { projectList } from './mockdata';

const board = new Board();
projectList.map((project) => board.addProject(project));


export default () => {
  return (
    <>
      <Header />
      <BoardDisplay board={board}/>
    </>
  ) 
}
