import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import QuestionPage from "./components/QuestionPage";
import Answer from "./components/Answer";
import { ResultProvider } from "./components/ResultContext";

const App = () => {
  return (
    <ResultProvider>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/question" element={<QuestionPage />} />
            <Route exact path="/question/answer" element={<Answer />} />
          </Routes>
        </Layout>
      </Router>
    </ResultProvider>
  );
};

export default App;
