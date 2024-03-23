import './App.css'
import {useEffect} from 'react'
import empCrud from './hooks/useCrud'
import { useState } from "react"
import FormEmpresa from './components/FormEmpresa'
import EmpCard from './components/EmpCard'
import { getEmpThunk } from './store/slices/empresa.slice'
import { useDispatch, useSelector } from 'react-redux'


function App() {
  const [infoUpdate, setInfoUpdate] = useState()
  const[isDisable, setIsDisable] = useState(true)
  const [isEdit, setIsEdit] = useState(true)
  const url= 'https://colmeneroback.onrender.com'
  const [  getEmp, createEmp, deleteEmp, updateEmp]= empCrud(url)


  const dispatch = useDispatch()

  const empresas =useSelector(store =>store.empresas)

  useEffect(() => {
    dispatch(getEmpThunk())
  }, [])
  
  console.log(empresas)
  const changeDisable =()=>{
    if (isDisable){
      setIsDisable(false)
      setIsEdit(false)
    }else{
      setIsDisable(true)
    }
  }
  

  return (
    <div className="colmenero-app">
      <h1 className="title">Empresa CRUD</h1>
      <button className='btn3' onClick={changeDisable}>Agregar empresa</button>
      <FormEmpresa
      createEmp = {createEmp}
      updateEmp = {updateEmp}
      infoUpdate={infoUpdate}
      setInfoUpdate={setInfoUpdate}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      setIsDisable={setIsDisable}
      isDisable={isDisable}
      />
      
      <div className="empresas-container">
        {
          empresas?.map(empresa=>(
            <EmpCard
            key={empresa.id}
            empresa={empresa}
            infoUpdate={infoUpdate}
            deleteEmp={deleteEmp}
            setInfoUpdate={setInfoUpdate}
            setIsEdit={setIsEdit}
            setIsDisable={setIsDisable}
            isDisable={isDisable}
            createEmp = {createEmp}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
