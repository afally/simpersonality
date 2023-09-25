import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import saveExtrovertCountToLocalStorage from "../util/saveExtrovertCountToLocalStorage";
import saveIntrovertCountToLocalStorage from "../util/saveIntrovertCountToLocalStorage";
import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
} from "mdb-react-ui-kit";

const Questionpage = () => {
  const [question, setQuestion] = useState([]);
  const [extrovert, setExtrovert] = useState(1);
  const [introvert, setIntrovert] = useState(1);

  //To render questions from backend
  const renderQuestions = () => {
    localStorage.clear();

    axios
      .get(`http://localhost:3001/api/questions/`)
      .then((res) => {
        downloaded = res.data.data;
        setQuestion(downloaded.question);
      })
      .catch((error) => console.log(error));

    setTimeout(() => {
      document.getElementById("hideDiv").style.display = "block";
    }, 1000);
  };

  const handleButtonClick = (option, count, questionIndex) => {
    if (option === "a" || option === "b") {
      setExtrovert((prevExtroverts) => prevExtroverts + count);
      console.log([option, count, questionIndex, extrovert]);
    } else if (option === "c" || option === "d") {
      setIntrovert((prevIntrovert) => prevIntrovert + count);
      console.log([option, count, questionIndex, introvert]);
    }

    setQuestion((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].selectedOption = option;
      return updatedQuestions;
    });
  };

  let downloaded;

  const renderedQuestionArray = question.map((item, index) => {
    return (
      <MDBCard key={item.number} style={{ width: "100%", margin: "0 auto" }}>
        <MDBCardHeader>{`Question ${item.number}`}</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle data-testid="question">{item.question}</MDBCardTitle>
          <MDBListGroup style={{ width: "100%", margin: "0 auto" }} light>
            <MDBListGroupItem className="px-3">
              <button
                className={
                  item.selectedOption === "a"
                    ? "active-button"
                    : "primary-button"
                }
                onClick={() => {
                  if (!item.selectedOption) {
                    handleButtonClick("a", 1, index);
                    saveExtrovertCountToLocalStorage(extrovert);
                  }
                }}
              >
                a
              </button>
              {item.optiona}
            </MDBListGroupItem>
            <MDBListGroupItem className="px-3">
              <button
                className={
                  item.selectedOption === "b"
                    ? "active-button"
                    : "primary-button"
                }
                onClick={() => {
                  if (!item.selectedOption) {
                    handleButtonClick("b", 1, index);
                    saveExtrovertCountToLocalStorage(extrovert);
                  }
                }}
              >
                b
              </button>
              {item.optionb}
            </MDBListGroupItem>
            <MDBListGroupItem className="px-3">
              <button
                className={
                  item.selectedOption === "c"
                    ? "active-button"
                    : "primary-button"
                }
                onClick={() => {
                  if (!item.selectedOption) {
                    handleButtonClick("c", 1, index);
                    saveIntrovertCountToLocalStorage(introvert);
                  }
                }}
              >
                c
              </button>
              {item.optionc}
            </MDBListGroupItem>
            <MDBListGroupItem className="px-3">
              <button
                className={
                  item.selectedOption === "d"
                    ? "active-button"
                    : "primary-button"
                }
                onClick={() => {
                  if (!item.selectedOption) {
                    handleButtonClick("d", 1, index);
                    saveIntrovertCountToLocalStorage(introvert);
                  }
                }}
              >
                d
              </button>
              {item.optiond}
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBCardBody>
      </MDBCard>
    );
  });

  return (
    <>
      <div
        style={{
          minHeight: "80vh",
          position: "relative",
          alignItems: "center",
          paddingBottom: "20px",
          paddingTop: "60px",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        <button
          id="hideButton"
          style={{
            display: "block",
            margin: "auto",
            fontSize: "3vh",
            padding: "10px 60px",
          }}
          onClick={() => {
            renderQuestions();
            document.getElementById("hideButton").style.display = "none";
          }}
          className="btn btn-primary btn-lg"
        >
          Personality-Test
        </button>
        {renderedQuestionArray}
        <div
          id="hideDiv"
          style={{ display: "none", textAlign: "center", marginTop: "50px" }}
        >
          <Link
            className="btn btn-primary btn-lg"
            to="./answer"
            style={{ textDecoration: "none", margin: "0 auto" }}
          >
            {" "}
            Result
          </Link>
        </div>
      </div>
    </>
  );
};

export default Questionpage;
