export function Car(props) {
  function onClick() {
    return props.onCarClick(2);
  }

  return (
    <div>
      je suis le composant {"<Car />"}
      <button onClick={onClick}>Cliquez ici</button>
      {/* <button onClick={()=>props.onCarClick(2)}>Cliquez ici</button> */}
    </div>
  );
}
