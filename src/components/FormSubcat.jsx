import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addSubcatThunk } from '../store/slices/subcategorias.slice'

const FormSubcat = ({categoria}) => {
    const { handleSubmit, register, reset, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const submit = data =>{
        data.categoriumId=categoria.id
        dispatch(addSubcatThunk(data))

        reset({
            nombre:'',
        })
    }
  return (
        <form className='formSubcat' onSubmit={handleSubmit(submit)}>
            <input {...register("nombre")} type="text" placeholder='Nombre'/>
            <button>agregar</button>
        </form>
    
  )
}

export default FormSubcat