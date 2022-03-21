import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, region, population, area, flags } = props.country;
  console.log(props);
  return (
    <div className="Country">
      <h3>
        Country Name: <span> {name}</span>
      </h3>
      <h4>Region: {region}</h4>
      <h5>Popultiaon : {population}</h5>
      <p>
        <small>Area: {area}</small>
      </p>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;
