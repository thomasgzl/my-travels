import React from "react";

const Travels = props => (
  <figure>
    <img src={props.photo} alt={props.dest} />
    <figcaption>
      <blockquote>{props.dest}</blockquote>
      <blockquote>{props.country}</blockquote>
      <cite>{props.distance}</cite>
    </figcaption>
  </figure>
);

export default Travels;