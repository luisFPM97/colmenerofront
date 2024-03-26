import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const empresaSlices = createSlice({
    name: 'empresas',
    initialState:[],
    reducers:{
        addEmp:(currentValue, action)=>[...currentValue, action.payload],
        removeEmp:(currentValue, action) =>currentValue.filter(emp=>emp.id !== action.payload),
        setEmp: (currentValue, action) => action.payload,
        updateEmp: (state, action) => { 
            const updatedEmpresa = action.payload;
            return state.map(emp => emp.id === updatedEmpresa.id ? updatedEmpresa : emp);
          }
        },
    })
export const {addEmp, removeEmp, setEmp, updateEmp}=empresaSlices.actions;
export default empresaSlices.reducer

const baseUrl = 'https://colmeneroback-dev-bxzc.1.us-1.fl0.io/empresas'

//obtener empresas
export const getEmpThunk = ()=> (dispatch) =>{
    const url=`${baseUrl}`
    axios.get(url)
        .then(res => dispatch(setEmp(res.data)))
        .catch(err => console.log(err))
}
//crear empresa 
export const addEmpThunk = (data) =>(dispatch)=>{
    console.log(data)
    const url=`${baseUrl}`
    axios.post(url, data)
        .then(res => dispatch(addEmp(res.data)))
        .catch(err => console.log(err))
}
//eliminar empresa
export const deleteEmpThunk = (id)=>(dispatch)=>{
    const url=`${baseUrl}/${id}`
    axios.delete(url)
        .then(res=> {
            console.log(res.data)
            dispatch(removeEmp(id))
        })
        .catch(err => console.log(err))
}
//editar empresa
export const updateEmpThunk = (id, data) => (dispatch) => {
    const url = `${baseUrl}/${id}`;
    axios.put(url, data)
      .then(res => {
        dispatch(updateEmp(res.data))
      })
      .catch(err => console.log(err))
  }