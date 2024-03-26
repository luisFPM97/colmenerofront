import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import {addCatThunk } from '../store/slices/categoria.slice'

const FomrCategory = ({empresa,setShowCat, showCat, createEmp}) => {
  
  const { handleSubmit, register, reset, formState: { errors } } = useForm()
  const limpiar =()=>{
    setShowCat(true)
    reset({
      nombre:'',
      descripcion:'',
      empresaId:'',
    })
  }
  const dispatch=useDispatch()

  

  const submit = data =>{
    data.empresaId = empresa.id
    console.log(data)
    console.log('creando',data)
    dispatch(addCatThunk(data))
    setShowCat(true)
    reset({
      nombre:'',
      descripcion:'',
      empresaId:'',
    })
  }

  

 
  return (
    <div className={`form-cat ${showCat && 'form_disable' }`}>
        <form  onSubmit={handleSubmit(submit)}>
          <span>{empresa.nombre}{empresa.id}</span>
          <br />
        <span>Nombre<input {...register("nombre")} type="text" /></span>
        <span>Descripción<input {...register("descripcion")} type="text" /></span>
        <button className="form__btn" >Submit</button>
        </form>
        
        <button className='btn_x' onClick={limpiar}>X</button>
    </div>
  )
}

export default FomrCategory