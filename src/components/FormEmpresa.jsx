
import {React, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addEmpThunk, updateEmpThunk } from '../store/slices/empresa.slice'

const FormEmpresa = ({empresa, createEmp, infoUpdate, setInfoUpdate,setIsEdit, updateEmp, setIsDisable, isDisable, isEdit}) => {

    const dispatch = useDispatch()

    const { handleSubmit, register, reset, formState: { errors } } = useForm()
    useEffect(() => {
      reset(infoUpdate)
    }, [infoUpdate])
    let idd = '';
    if (isEdit) {
        idd =  'Editando empresa';
    }else{
        idd = 'Crear Empresa'
    }
    const limpiar =()=>{
        setIsDisable(true)
        reset({
            nombre:'',
            mision:'',
            vision:'',
            eslogan:'',
        })
    }
    const submit = data =>{
        if (isEdit) {
            dispatch(updateEmpThunk(data.id, data))
            alert('Actuaizado correctamente')
            setIsDisable(true)
        }else{
            console.log('creando',data)
            dispatch(addEmpThunk(data))
            alert('Se ha creado correctamente')
            reset({
                nombre:'',
                mision:'',
                vision:'',
                eslogan:'',
            })
            setIsDisable(true)
            reset({
                nombre:'',
                mision:'',
                vision:'',
                eslogan:'',
            })
        }
};


  return (
    <div className ={`form ${isDisable && 'form_disable' }`}>
        <form  onSubmit={handleSubmit(submit)} >
            <span>{idd}</span>
            <input {...register("nombre")} type="text" placeholder="Nombre empresa" />
            <input {...register("mision")} type="text" placeholder="Mision" />
            <input {...register("vision")} type="text" placeholder="Vision" />
            <input {...register("eslogan")} type="text" placeholder="Eslogan" />
            <button className="form__btn"  >Submit</button>
        </form>
        <button className="form__x" onClick={limpiar}><i className="fa-solid fa-x"></i></button>
    </div>
  )
}

export default FormEmpresa