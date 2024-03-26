import React, { useEffect, useState } from 'react'
import FomrCategory from './FomrCategory'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addEmpThunk, deleteEmpThunk, getEmpThunk } from '../store/slices/empresa.slice'
import { getCatThunk } from '../store/slices/categoria.slice'
import CatCard from './CatCard'

const EmpCard = ({ empresa, setInfoUpdate, setIsEdit, setIsDisable, createEmp, isEditCat, setIsEditCat,infoCat, setInfoCat }) => {

    const dispatch = useDispatch()
    const categorias = useSelector(store => store.categorias)
    const [showCat, setShowCat] = useState(true)

    useEffect(() => {

        dispatch(getCatThunk())
    }, [])
    

    const handleDelete = () => {
        console.log('empresa a eliminar: ', empresa.nombre, empresa.id)
        dispatch(deleteEmpThunk(empresa.id))
    }
    const handleEdit = () => {
        setIsEdit(true)
        setInfoUpdate(empresa)
        console.log(empresa)
        setIsDisable(false)
    }
    const addCat = () => {
        setIsEditCat(false)
        setShowCat(false)
    }
    return (
        <div className="emp">
            <section className="empresa_cont">
                <div><span>Nombre de la empresa: </span><b><p className='nameEmp'>{empresa.nombre}</p></b></div>
                <span>Mision</span><b><p >{empresa.mision}</p></b>
                <span>Vision</span><b><p>{empresa.vision}</p></b>
                <span>Eslogan</span><b><p>{empresa.eslogan}</p></b>
            </section>
            <div className='btns'>
                <button className='btn2' onClick={handleDelete}><i className="fa-solid fa-trash"></i></button>
                <button className='btn2' onClick={handleEdit}><i className="fa-solid fa-pen-to-square"></i></button>
            </div>

            <button className='btn3' onClick={addCat}>Agregar categoria</button>
            <FomrCategory
                empresa={empresa}
                setShowCat={setShowCat}
                showCat={showCat}
                createEmp={createEmp}
                isEditCat={isEditCat}
                setIsEditCat={setIsEditCat}
                infoCat={infoCat}
            />
            <div>
                {categorias?.map((categoria) => (
                    categoria.empresaId === empresa.id ? (
                        <CatCard 
                        key={categoria.id} 
                        categoria={categoria}
                        isEditCat={isEditCat}
                        setIsEditCat={setIsEditCat}
                        setShowCat={setShowCat}
                        setInfoCat={setInfoCat}
                         />
                    ) : null
                ))}
            </div>
        </div>
    )
}

export default EmpCard