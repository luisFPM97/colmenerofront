import React, { useEffect } from 'react'
import { getSubcatThunk } from '../store/slices/subcategorias.slice'
import { useDispatch } from 'react-redux'

const Subcat = ({subcategoria}) => {

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getSubcatThunk())
    }, [])
    

  return (
    <div><span>{subcategoria.nombre}</span></div>
  )
}

export default Subcat