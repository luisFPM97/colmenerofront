import React from "react";

const CatCard = ({ categoria }) => {
    
  return (
    <div>
      <span>{categoria.nombre}</span>
      <span>{categoria.descripcion}</span>
      <button>eliminar</button>
    </div>
  );
};

export default CatCard;
