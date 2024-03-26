import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCatThunk, getCatThunk } from "../store/slices/categoria.slice";
import Subcat from "./Subcat";
import { getSubcatThunk } from "../store/slices/subcategorias.slice";
import FormSubcat from "./FormSubcat";

const CatCard = ({
  categoria,
  isEditCat,
  setIsEditCat,
  setShowCat,
  setInfoCat,
}) => {

  const subcategorias = useSelector(store => store.subcategorias)

  useEffect(() => {
    dispatch(getCatThunk())
    dispatch(getSubcatThunk())
}, [])



  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCatThunk(categoria.id));
  };

  const handleEdit = () => {
    setIsEditCat(true);
    setShowCat(false);
    setInfoCat(categoria);

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
      <button>Agregar subcategoria</button>
      <div>
        <FormSubcat
        categoria={categoria}
        />
        <Subcat/>
      </div>
    </div>
  );
};

export default CatCard;
