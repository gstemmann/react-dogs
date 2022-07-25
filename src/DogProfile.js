import React from "react";
import { useParams } from "react-router-dom";



const DogProfile = ({ dogs }) => {
    const { name } = useParams();

    if(name) {
        const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());
        if(dog) {
        return (
            <div>
                <h2>{dog.name}</h2>
                <h2>age: {dog.age}</h2>
                <h2>{dog.facts.join(" ")}</h2>
                <img src={dog.src} alt={dog.name} />
            </div>
        )
        }
    }
}

export default DogProfile;