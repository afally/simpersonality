function saveExtrovertCountToLocalStorage(state) {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("extrovert", serializedState);
}

export default saveExtrovertCountToLocalStorage;
