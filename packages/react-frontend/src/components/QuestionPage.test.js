import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import QuestionPage from "./QuestionPage.js";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { act } from "react-dom/test-utils";

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

test("The questions are rendered", async () => {
  render(
    <BrowserRouter>
      <QuestionPage />
    </BrowserRouter>
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

  expect(questions).toHaveLength(3);
});
