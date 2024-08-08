import { render, screen } from "@testing-library/react";
import App from "../App";
import '@testing-library/jest-dom';


test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
  
    // Act
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
  
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });

  test("displays an image of yourself with the correct alt text", () => {
    // Arrange
    render(<App />);
  
    // Act
    const image = screen.getByAltText(/image of yourself/i);
  
    // Assert
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
  });

  test("displays a second-level heading with the text `About Me`", () => {
    // Arrange
    render(<App />);
  
    // Act
    const secondLevelHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });
  
    // Assert
    expect(secondLevelHeading).toBeInTheDocument();
  });

  test("displays a paragraph for the biography", () => {
    // Arrange
    render(<App />);
  
    // Act
    const biographyParagraph = screen.getByText(/my name is abdi i live in kenya i work asa software engineer am 21, yrs old. am a muslim by faith, my hobbie include swimming and reading/i);

  
    // Assert
    expect(biographyParagraph).toBeInTheDocument();
  });
  
  test("displays a link to GitHub with the correct URL", () => {
    // Arrange
    render(<App />);
  
    // Act
    const githubLink = screen.getByRole("link", { name: /GitHub/i });
  
    // Assert
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Abdikhafar-hub');
  });
  
  test("displays a link to LinkedIn with the correct URL", () => {
    // Arrange
    render(<App />);
  
    // Act
    const linkedinLink = screen.getByRole("link", { name: /LinkedIn/i });
  
    // Assert
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/abdikhafar-issack-b83301213/');
  });
  
