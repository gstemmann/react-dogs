import React from "react";
// import DogProfile from "./DogProfile";
import { Link } from "react-router-dom";


const DogsList = ({dogs}) => {



    return (
        <div>
            <h1>Click on a dog's name to see his profile</h1>
            <h2>
                {dogs.map(d =>
                    <li key={d.name}>
                        <Link to={`/${d.name.toLowerCase()}`}>{d.name}</Link>
                    </li>
                    )}
            </h2>
             
        </div>
    );
    }

    export default DogsList;