function saveIntrovertCountToLocalStorage(state) {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("introvert", serializedState);
}

export default saveIntrovertCountToLocalStorage;
