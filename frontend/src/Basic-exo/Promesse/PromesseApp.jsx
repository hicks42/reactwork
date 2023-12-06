import React from "react";
import { useState } from "react";
import s from "./style.module.css";

export function PromesseApp() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function launch() {
    setIsLoading(true);
    const promesse = new Promise(PromesseFunction);

    promesse
      .then((responseSucces) => {
        setResult(`Bravo ${responseSucces}`);
      })
      .catch((responseEchec) => {
        setResult(`Déso ${responseEchec}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <div className={s.promesse_container}>
        <h1>Test de promesse (promise)</h1>
        <p>
          Le bouton déclenche un timeout de 1s et génere un nombre aléatoire a 2
          décimales entre 0 et 0.99.
          <br />
          Si le nombre est superieur a 0.5 c&apos;est un succés.
        </p>
        {isLoading && <p>Loading...</p>}
        {!isLoading && <p>{result ? result : "rien encore"}</p>}
        <button className={"btn btn-dark"} onClick={launch}>
          Promettez
        </button>
      </div>
    </>
  );
}

function PromesseFunction(success, failure) {
  setTimeout(() => {
    const random = Math.random().toFixed(2);
    if (random > 0.5) {
      success("Succès !!! avec : " + random);
    } else {
      failure("Echec !!! avec : " + random);
    }
  }, 1000);
}
