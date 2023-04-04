import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("functionality one", () => {
  test("Should render correct number of incomplete task", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const footerElement = screen.getByText(/5 tasks left/i);
    const footerElement2 = screen.getByTitle("para");
    //   console.log(footerElement2)
    expect(footerElement2).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });

  test("Should render one incomplete task", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const footerElement = screen.getByText(/1 task left/i);
    expect(footerElement).toBeInTheDocument();
  });
});


describe("functionality 2", () => {
  describe("sub functionality of 2", () => {
    test("haveTextContain", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const footerElement = screen.getByText(/1 task left/i);
      expect(footerElement).toHaveTextContent("1 task left");
    });
  });

  describe("sub second functionality", () => {
    test("not assertion", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const footerElement = screen.getByText(/1 task left/i);
      expect(footerElement).not.toBeFalsy();
    });

    test("text content assertion", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={2} />);
      const footerElement = screen.getByText(/2 tasks left/i);
      expect(footerElement.textContent).toBe("2 tasks left");
    });
  });
});
