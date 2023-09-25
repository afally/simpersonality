import loadExtrovertCountFromLocalStorage from "./loadExtrovertCountFromLocalStorage";
import loadIntrovertCountFromLocalStorage from "./loadIntrovertCountFromLocalStorage";

const result = () => {
  //Takes in current question/page and increases the question
  let extrocount = loadExtrovertCountFromLocalStorage();
  let introcount = loadIntrovertCountFromLocalStorage();
  console.log(`${extrocount}  loaded extrocount`);
  console.log(`${introcount}  introcount`);

  if (extrocount > introcount) {
    console.log("You are an Extrovert");
    return "You are an Extrovert";
    // setAnwser('You are an Extrovert')
  } else if (extrocount < introcount) {
    console.log("You are an Introvert");
    return "You are an Introvert";
    //setAnwser('You are an Introvert')
  } else {
    console.log("Retry test");
    console.log(extrocount);
    console.log(introcount);
    return "Retry test";
  }

  // localStorage.clear();
};

export default result;
