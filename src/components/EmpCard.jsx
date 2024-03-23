import React, { useState } from 'react'
import FomrCategory from './FomrCategory'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addEmpThunk, deleteEmpThunk } from '../store/slices/empresa.slice'

const EmpCard = ({empresa,deleteEmp, setInfoUpdate, setIsEdit, setIsDisable, isDisable, createEmp, InfoUpdate}) => {

    const dispatch = useDispatch()
    const [showCat, setShowCat] = useState(true)
    const handleDelete =()=>{
        console.log('empresa a eliminar: ',empresa.nombre,empresa.id)
        dispatch(deleteEmpThunk(empresa.id))
    }
    const handleEdit =()=>{
        setIsEdit(true)
        setInfoUpdate(empresa)
        console.log(empresa)
        setIsDisable(false)
    }
    const addCat=()=>{
            setShowCat(false)
    }
  return (
    <div className="emp">
        <section className="empresa_cont">
            <div><span>Nombre de la empresa: </span><b><p>{empresa.nombre}</p></b></div>
            <span>Mision</span><b><p>{empresa.mision}</p></b>
            <span>Vision</span><b><p>{empresa.vision}</p></b>
            <span>Eslogan</span><b><p>{empresa.eslogan}</p></b>
        </section>
        <div className='btns'>
        <button className='btn2' onClick={handleDelete}><i class="fa-solid fa-trash"></i></button>
        <button className='btn2' onClick={handleEdit}><i class="fa-solid fa-pen-to-square"></i></button>
        </div>
        
        <button className='btn3' onClick={addCat}>Agregar categoria</button>
        <FomrCategory
        empresa={empresa}
        setShowCat={setShowCat}
        showCat={showCat}
        createEmp={createEmp}
        />
    </div>
  )
}

export default EmpCard