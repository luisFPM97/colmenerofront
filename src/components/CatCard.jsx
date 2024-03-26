import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteCatThunk, getCatThunk } from "../store/slices/categoria.slice";

const CatCard = ({
  categoria,
  isEditCat,
  setIsEditCat,
  setShowCat,
  setInfoCat,
}) => {

  useEffect(() => {
    dispatch(getCatThunk())
}, [])

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCatThunk(categoria.id));
  };

  const handleEdit = () => {
    setIsEditCat(true);
    setShowCat(false);
    setInfoCat(categoria);
    console.log(setInfoCat);
  };

  return (
    <div className="infoCat">
      <div className="cardCat">
        <span className="nameCat">{categoria.nombre}</span>
        <span className="desCat">{categoria.descripcion}</span>
        <button className="btnCat" onClick={handleDelete}>
          <i className="fa-solid fa-trash"></i>
        </button>
        <button className="btnCat" onClick={handleEdit}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
      <div>
        <b>
          <span>beneficios</span>
        </b>
      </div>
    </div>
  );
};

export default CatCard;
