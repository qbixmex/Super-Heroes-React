import { describe, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { CreateHero } from './form-modal.component';

describe('<CreateHero />', () => {
  const headingTitle = 'Create Hero';
  let container: HTMLElement;

  beforeEach(() => {
    container = render(<CreateHero title={ headingTitle } />).container;
  });

  test('Should show modal on click add button', () => {
    //* 1) Arrange
    const addButton = container.querySelector('#add-button');

    //* 2) Act
    if (addButton) fireEvent.click(addButton);

    const title = screen.getByText(headingTitle);

    //* 3) Expect
    expect(title).toBeDefined();
  });

  test('Should show have form labels', () => {
    //* 1) Arrange
    const addButton = container.querySelector('#add-button');

    //* 2) Act
    if (addButton) fireEvent.click(addButton);

    const heroNameLabel = screen.getByText('Hero Name');
    const realNameLabel = screen.getByText('Real Name');
    const studioLabel = screen.getByText('Studio');

    //* 3) Expect
    expect(heroNameLabel).toBeDefined();
    expect(realNameLabel).toBeDefined();
    expect(studioLabel).toBeDefined();
  });

  test('Should have form inputs', () => {
    //* 1) Arrange
    const addButton = container.querySelector('#add-button');

    //* 2) Act
    if (addButton) fireEvent.click(addButton);

    const heroNameInput = screen.getByTestId('heroName');
    const realNameInput = screen.getByTestId('realName');
    const studioInput = screen.getByTestId('studio');

    //* 3) Expect
    expect(heroNameInput).toBeDefined();
    expect(realNameInput).toBeTruthy();
    expect(studioInput).toBeTruthy();
  });
});
