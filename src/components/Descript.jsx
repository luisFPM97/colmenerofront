import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDescThunk } from '../store/slices/descripcion.slice'

const Descript = ({descripcion}) => {
    const dispatch = useDispatch()
    
    const handleDelete = () => {
        dispatch(deleteDescThunk(descripcion.id));
    }
  return (
    <div className='descripcion'>
        <span>{descripcion.descripcion}</span>
        <button className='btnCat dll' onClick={handleDelete}>X</button>
    </div>
  )
}

export default Descript