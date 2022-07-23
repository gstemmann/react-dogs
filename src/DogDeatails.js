import React from "react";
import { Link } from "react-router-dom";


const DogDetails = () => {

const dogs = [
    {
      name: "Whiskey",
      age: 5,
      // src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      // src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      // src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      // src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ];
  
  


    return (
        <div>
            <h1>Click on a dog's name to see his profile</h1>
            <h2>
                {dogs.map(d =>
                    <Link to={`/dogs/${d.name}`}>{d.name}</Link>
                    )}
            </h2>

        </div>
    );
    }

    export default DogDetails;