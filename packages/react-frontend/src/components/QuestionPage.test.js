import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import QuestionPage from "./QuestionPage.js";
import Answer from "./Answer.js";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { act } from "react-dom/test-utils";
import { ResultProvider } from "./ResultContext";

//mock data for the test

const server = setupServer(
  rest.get("http://localhost:3001/api/questions/", (req, res, ctx) =>
    res(
      ctx.json({
        data: {
          question: [
            {
              number: 1,
              question:
                "Youre really busy at work and a colleague is telling you their life",
              optiona: "Dont dare to interrupt them",
              optionb:
                "Think its more important to give them some of your time; work can",
              optionc: "Listen, but with only with half an ear",
              optiond:
                "Interrupt and explain that you are really busy at the moment",
            },
            {
              number: 2,
              question:
                "Youve been sitting in the doctors waiting room for more than 25 ",
              optiona: "Look at your watch every two minutes",
              optionb: "Bubble with inner anger, but keep quiet",
              optionc:
                "Explain to other equally impatient people in the room that the doctor",
              optiond:
                "Complain in a loud voice, while tapping your foot impatiently",
            },
            {
              number: 3,
              question:
                "Youve been sitting in the doctors waiting room for more than 25 ",
              optiona: "Look at your watch every two minutes",
              optionb: "Bubble with inner anger, but keep quiet",
              optionc:
                "Explain to other equally impatient people in the room that the doctor",
              optiond:
                "Complain in a loud voice, while tapping your foot impatiently",
            },
            {
              number: 4,
              question:
                "Youve been sitting in the doctors waiting room for more than 25 ",
              optiona: "Look at your watch every two minutes",
              optionb: "Bubble with inner anger, but keep quiet",
              optionc:
                "Explain to other equally impatient people in the room that the doctor",
              optiond:
                "Complain in a loud voice, while tapping your foot impatiently",
            },
          ],
        },
      })
    )
  )
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

describe("Question Page Tests", () => {
  test("The questions are rendered", async () => {
    render(
      <ResultProvider>
        <Router>
          <QuestionPage />
          <Answer />
        </Router>
      </ResultProvider>
    );

    // Find the button element
    const button = screen.getByText("Personality-Test");

    // Simulate a button click to trigger the axios call
    fireEvent.click(button);

    // Wait for the questions to be rendered
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    const questions = screen.getAllByTestId("question");

    //Ensure the correct number of questions are rendered

    expect(questions).toHaveLength(4);
  });
  test("The state of the selected button is updated when clicked", async () => {
    render(
      <ResultProvider>
        <Router>
          <QuestionPage />
          <Answer />
        </Router>
      </ResultProvider>
    );

    // Find the button element
    const button = screen.getByText("Personality-Test");

    // Simulate a button click to trigger the axios call
    fireEvent.click(button);

    // Wait for the questions to be rendered
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    const buttonx = screen.getAllByTestId("optiona")[0];
    const buttony = screen.getAllByTestId("optiona")[1];

    fireEvent.click(buttonx);
    //Ensure the correct number of questions are rendered
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    expect(buttonx).toHaveClass("active-button");
    expect(buttony).toHaveClass("primary-button");
  });

  test("non selected buttons don't change state", async () => {
    render(
      <ResultProvider>
        <Router>
          <QuestionPage />
          <Answer />
        </Router>
      </ResultProvider>
    );

    // Find the button element
    const button = screen.getByText("Personality-Test");

    // Simulate a button click to trigger the axios call
    fireEvent.click(button);

    // Wait for the questions to be rendered
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    const buttonx = screen.getAllByTestId("optiona")[0];
    const buttony = screen.getAllByTestId("optionb")[0];
    const buttonz = screen.getAllByTestId("optionc")[0];
    fireEvent.click(buttonx);
    //Ensure the correct number of questions are rendered
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    expect(buttonx).toHaveClass("active-button");
    expect(buttony).toHaveClass("primary-button");
    expect(buttonz).toHaveClass("primary-button");
  });
});
describe("Answer Page Tests", () => {
  test("Returns accurate answers based on selected button", async () => {
    render(
      <ResultProvider>
        <Router>
          <QuestionPage />
          <Answer />
        </Router>
      </ResultProvider>
    );

    // Find the button element
    const button = screen.getByText("Personality-Test");

    // Simulate a button click to trigger the axios call
    fireEvent.click(button);

    // Wait for the questions to be rendered
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    const buttonx = screen.getAllByTestId("optiona")[0];
    const buttony = screen.getAllByTestId("optiona")[1];
    const buttonz = screen.getAllByTestId("optiona")[2];
    const buttonu = screen.getAllByTestId("optionc")[3];

    const result = screen.getByText("Result");
    fireEvent.click(buttonx);
    fireEvent.click(buttony);
    fireEvent.click(buttonz);
    fireEvent.click(buttonu);

    fireEvent.click(result);
    //Ensure the correct number of questions are rendered
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    const bodyText = screen.getByText(/Extrovert/i);

    expect(bodyText).toBeInTheDocument();
  });
});
