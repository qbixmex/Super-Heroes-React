import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CreateHero } from './create-hero.component';

describe('<CreateHero />', () => {
  const headingTitle = 'Create Hero';
  let container: HTMLElement;

  beforeAll(() => {
    container = render(<CreateHero title={ headingTitle } />).container;
  });

  test('Should have a heading text', () => {
    //* 1) Arrange
    const heading = screen.getByRole('heading', { level: 5 });

    //* 2) Act
    // Example: Click a button

    //* 3) Expect
    expect(heading).toBeDefined();
    expect(heading).toHaveTextContent(headingTitle);
  });
  test('Should have labels before every inputs', () => {
    render(<CreateHero title="Create Hero" />);

    const heroNameLabel = container.querySelector('#heroNameLabel');
    const realNameLabel = container.querySelector('#realNameLabel');
    const studioLabel = container.querySelector('#studioLabel');

    expect(heroNameLabel?.innerHTML).toBe('Hero Name');
    expect(realNameLabel?.innerHTML).toBe('Real Name');
    expect(studioLabel?.innerHTML).toBe('Studio');
  });
  test('Should have inputs defined', () => {
    const heroName = container.querySelector('#heroName');
    const realName = container.querySelector('#realName');
    const studio = container.querySelector('#studio');

    expect(heroName).toBeTruthy();
    expect(realName).toBeTruthy();
    expect(studio).toBeTruthy();
  });
});
