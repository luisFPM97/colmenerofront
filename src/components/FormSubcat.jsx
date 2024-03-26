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
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <input {...register("nombre")} type="text" placeholder='Nombre'/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FormSubcat