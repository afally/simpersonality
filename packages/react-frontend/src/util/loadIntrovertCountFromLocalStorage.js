function loadIntrovertCountFromLocalStorage() {
  const serializedState = localStorage.getItem("introvert");
  if (serializedState === null) {
    return 0;
  }
  return JSON.parse(serializedState);
}

export default loadIntrovertCountFromLocalStorage;
