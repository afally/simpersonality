import React from "react";
import { useContext } from "react";
import { ResultContext } from "./ResultContext";

const Answer = () => {
  const style = {
    margin: "auto",
    padding: "10% '20%' 20% 10%",
    color: "white",
    minHeight: "80vh",
    position: "relative",
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundImage:
      "url(https://www.pexels.com/photo/defocused-image-of-lights-255379/)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const { result } = useContext(ResultContext);

  // function scrollToTestDiv() {
  //   const divElement = document.getElementById("answer");
  //   divElement.scrollIntoView({ block: "end" });
  // }

  // useEffect(() => {
  //   scrollToTestDiv();
  // }, []);

  return (
    <div id="answer" style={style}>
      <h1 className="mb-3 text-center text-black" style={{ fontSize: "7vh" }}>
        {result}
      </h1>
    </div>
  );
};

export default Answer;
