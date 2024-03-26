import React from "react";
import { useDispatch } from "react-redux";
import { deleteCatThunk } from "../store/slices/categoria.slice";

const CatCard = ({ categoria, isEditCat, setIsEditCat, setShowCat, setInfoCat }) => {

    const dispatch = useDispatch()

    const handleDelete = () =>{
        dispatch(deleteCatThunk(categoria.id))
    }

    

    const handleEdit = () => {
        setIsEditCat(true)
        setShowCat(false)
        setInfoCat(categoria)
    }

  return (
    <div>
      <span>{categoria.id}</span>
      <span>{categoria.nombre}</span>
      <span>{categoria.descripcion}</span>
      <span>{categoria.empresaId}</span>
      <button onClick={handleDelete}>eliminar</button>
      <button onClick={handleEdit}>actualizar</button>
    </div>
  );
};

export default CatCard;
