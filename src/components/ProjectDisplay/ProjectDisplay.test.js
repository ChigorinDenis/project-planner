import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from "@testing-library/react";
import ProjectDisplay from './ProjectDisplay';
import Project from '../../entities/Project';

const project = new Project('p1', 'title', 'text', 'detail information');

describe('testing ProjectDisplay', () => {
  test('checking work moreInfo button', () => {
    render(<ProjectDisplay project={project}/>);
    const moreButton = screen.getByText('More Info');
    fireEvent.click(moreButton);
    expect(screen.queryByText('detail information')).toBeInTheDocument();
    fireEvent.click(moreButton);
    expect(screen.queryByText('detail information')).toBeNull();
  })
})