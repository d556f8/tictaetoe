import React from "react";

const Stroke = ({ value, onClick }) => {
  return (
    <button className="Stroke" onClick={onClick}>
      {value}
    </button>
  )
}

export default Stroke;
