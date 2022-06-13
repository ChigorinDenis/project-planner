import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from "@testing-library/react";
import App from './App';

describe('testing App', () => {
  test('render app', () => {
    render(<App />);
    const header = screen.getByText('Project Planner');
    expect(header).toBeInTheDocument();
  })
  test('render finished project in finished projects', () => {
    render(<App />);
    const buttons = screen.getAllByText('Finish');
    expect(buttons[0]).toBeInTheDocument();
    expect(screen.queryByText('Activate')).toBeNull();
    fireEvent.click(buttons[0]);
    expect(screen.getByText('Activate')).toBeInTheDocument();
  })
  test('unmount finished project after activate', () => {
    render(<App />);
    const button = screen.queryByText('Activate');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.queryByText('Activate')).toBeNull();
  })

})
