function PromesseFunction(success, failure) {
  setTimeout(() => {
    const random = Math.random().toFixed(2);
    if (random > 0.5) {
      success("Succès !!! Grand random : " + random);
    } else {
      failure("Echec !!! Petit random : " + random);
    }
  }, 2000);
}

function launch() {
  const promesse = new Promise(PromesseFunction);

  promesse
    .then((responseSucces) => {
      console.log("Bravo", responseSucces);
    })
    .catch((responseEchec) => {
      console.log("Déso", responseEchec);
    });
}

export function PromesseApp() {
  return (
    <div>
      <button className={"btn btn-dark"} onClick={launch}>Promettez</button>
    </div>
  );
}
