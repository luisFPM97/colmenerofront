import React, { useEffect } from 'react'
import { deleteSubcatThunk, getSubcatThunk } from '../store/slices/subcategorias.slice'
import { useDispatch } from 'react-redux'

const Subcat = ({subcategoria}) => {

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getSubcatThunk())
    }, [])
    const handleDelete = () => {
        dispatch(deleteSubcatThunk(subcategoria.id));
    }

  return (
    <div>
        <span>{subcategoria.nombre}</span>
        <button onClick={handleDelete}>X</button>
        <button><i className="fa-solid fa-pen-to-square"></i></button>
    </div>
  )
}

export default Subcat