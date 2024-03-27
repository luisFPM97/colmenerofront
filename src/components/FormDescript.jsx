import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addDescThunk } from '../store/slices/descripcion.slice'

const FormDescript = ({subcategoria}) => {
    const { handleSubmit, register, reset, formState: { errors } } = useForm()
    const dispatch = useDispatch()

    const submit = data =>{
        data.subcategoriumId = subcategoria.id,
        dispatch(addDescThunk(data))

        reset({
            descripcion:'',
        })
    }
    
  return (
        <form className='formSubcat' action="" onSubmit={handleSubmit(submit)}>
            <input {...register("descripcion")}  type="text" placeholder={subcategoria.nombre}/>
            <button>agregar</button>
        </form>
  )
}

export default FormDescript