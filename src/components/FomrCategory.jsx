import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateCatThunk, addCatThunk } from '../store/slices/categoria.slice'

const FomrCategory = ({ empresa, setShowCat, showCat, isEditCat, setIsEditCat, infoCat }) => {

  const { handleSubmit, register, reset, formState: { errors } } = useForm()


  useEffect(() => {
    reset({
      id: infoCat.id,
      nombre: infoCat.nombre,
      descripcion: infoCat.descripcion,
      empresaId: infoCat.empresaId
    })
  }, [infoCat])


  const limpiar = () => {
    setShowCat(true)
    location.reload()
    reset({
      nombre: '',
      descripcion: '',
      empresaId: '',
    })
  }
  const dispatch = useDispatch()



  const submit = data => {
    if (isEditCat) {
      dispatch(UpdateCatThunk(data.id, data))
      alert('Actuaizado correctamente')
    } else {
      data.empresaId = empresa.id
      console.log('creando', data)
      dispatch(addCatThunk(data))
      alert('Se ha creado correctamente')
    }
    location.reload()
    setShowCat(true)
    reset({
      nombre: '',
      descripcion: '',
      empresaId: '',
    })
  }




  return (
    <div className={`form-cat ${showCat && 'form_disable'}`}>
      <form onSubmit={handleSubmit(submit)}>
        <span>{empresa.nombre}</span>
        <br />
        <input {...register("nombre")} type="text" placeholder='Nombre' />
        <input {...register("descripcion")} type="text" placeholder='Descripción' />
        <button className="form__btn" >Submit</button>
      </form>
      <button className='btn_x' onClick={limpiar}>X</button>
    </div>
  )
}

export default FomrCategory