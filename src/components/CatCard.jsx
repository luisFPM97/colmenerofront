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
  const subcategorias = useSelector((store) => store.subcategorias);

  useEffect(() => {
    dispatch(getCatThunk());
    dispatch(getSubcatThunk());
  }, []);

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
        <div className="btnsCat">
          <button className="btnCat dll" onClick={handleDelete}>
            <i className="fa-solid fa-trash"></i>
          </button>
          <button className="btnCat edit" onClick={handleEdit}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      </div>
      <button className="addCategory">Agregar subcategoria</button>
      <FormSubcat categoria={categoria} />
        <section className="listasubcat">
          {subcategorias?.map((subcategoria) =>
            subcategoria.categoriumId === categoria.id ? (
              <Subcat key={subcategoria.id} subcategoria={subcategoria} />
            ) : null
          )}
        </section>
    </div>
  );
};

export default CatCard;
