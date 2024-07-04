import React from "react";
import "./index.css";
import "./main.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Checkbox from "./checkbox";
import Button from "./button";
import Text from "./text";
import Selection from "./select";
import RadioBtn from "./radio";

function Main () {
  return (
    <div className="Centered">
      <h1>Ma Todo List</h1>
        <Checkbox />
        <p>
        Voici une liste de tache réalisée avec plaisir avec React !
        </p>
        <Button label="supprimer"/>
        <hr className="trait"/>
        <h2 className="AddTask">Ajouter une tache</h2>
        <Text label="Titre"/>
        <Text label="Description"/>
        <h3>Date de fin</h3>
        <Selection/>
        <RadioBtn/>
        <Button label="Enregister"/>
    </div>
  );
}
export default Main;