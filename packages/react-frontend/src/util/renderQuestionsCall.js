import axios from "axios";

async function renderQuestionsCall() {
  let downloaded;
  const result = await axios
    .get(`http://localhost:3001/api/questions/`)
    .then((res) => {
      downloaded = res.data.data;
      if (downloaded) {
        return downloaded.question;
      }
      //return downloaded.question;
    })
    .catch((error) => console.log(error));

  console.log(result);
}

export default renderQuestionsCall;
