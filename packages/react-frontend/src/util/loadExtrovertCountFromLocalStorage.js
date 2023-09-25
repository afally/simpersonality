function loadExtrovertCountFromLocalStorage() {
  const serializedState = localStorage.getItem("extrovert");
  if (serializedState === null) {
    return 0;
  }
  return JSON.parse(serializedState);
}

export default loadExtrovertCountFromLocalStorage;
