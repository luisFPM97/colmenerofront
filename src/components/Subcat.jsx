import React, { useEffect } from 'react'
import { deleteSubcatThunk, getSubcatThunk } from '../store/slices/subcategorias.slice'
import { useDispatch, useSelector } from 'react-redux'
import FormDescript from './FormDescript'
import { getDescThunk } from '../store/slices/descripcion.slice'
import Descript from './Descript'

const Subcat = ({subcategoria}) => {

    const dispatch = useDispatch()
    const descripciones = useSelector(store => store.descripciones)
    console.log(descripciones)
    useEffect(() => {
        dispatch(getDescThunk())
        dispatch(getSubcatThunk())
    }, [])
    const handleDelete = () => {
        dispatch(deleteSubcatThunk(subcategoria.id));
    }

  return (
    <div>
        <div>
        <span>{subcategoria.nombre}</span>
        <button onClick={handleDelete}>X</button>
        <button><i className="fa-solid fa-pen-to-square"></i></button>
        </div>
        <span>agregar {subcategoria.nombre}</span>
        <FormDescript
        subcategoria={subcategoria}
        />
        <section>
            {
                descripciones?.map((descripcion)=>(
                    descripcion.subcategoriumId === subcategoria.id ?(
                        <Descript
                        key={descripcion.id}
                        descripcion={descripcion}
                        />
                    ): null
                ))
            }
        </section>
    </div>
  )
}

export default Subcat