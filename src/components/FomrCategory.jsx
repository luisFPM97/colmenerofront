import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addEmp, addEmpThunk } from '../store/slices/empresa.slice'

const FomrCategory = ({empresa,setShowCat, showCat, createEmp}) => {
  
  const { handleSubmit, register, reset, formState: { errors } } = useForm()
  const limpiar =()=>{
    setShowCat(true)
    
  }
  
  const submit = data =>{
    let {nombre, descripcion, empresaId }=data
    empresaId=empresa.id
    console.log(empresaId);
    createEmp('/categorias',data)
  }

  const dispatch=useDispatch()

  const handleAddEmp =()=>{
    
    dispatch(addEmpThunk(data))
  }
  return (
    <div className={`form-cat ${showCat && 'form_disable' }`}>
        <form  onSubmit={handleSubmit(submit)}>
          <span>{empresa.nombre}{empresa.id}</span>
          <br />
        <span>Nombre<input {...register("nombre")} type="text" /></span>
        <span>Descripción<input {...register("descripcion")} type="text" /></span>
        <button className="form__btn" onClick={handleAddEmp}>Submit</button>
        </form>
        
        <button className='btn_x' onClick={limpiar}>X</button>
    </div>
  )
}

export default FomrCategory