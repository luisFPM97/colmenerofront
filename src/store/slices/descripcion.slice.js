import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const descripcionSlicesa = createSlice({
    name: 'descripciones',
    initialState: [],
    reducers:{
        setDesc: (currentValue,action)=>action.payload,
        addDesc: (currentValue,action)=>[...currentValue,action.payload],
        removeDesc:(currentValue, action) =>currentValue.filter(desc=>desc.id !== action.payload),
        updateDesc:(state, action) => { 
            const updatedDesc = action.payload;
            return state.map(desc => desc.id === updatedDesc.id ? updatedDesc : desc);
          }
    }
})
export const {setDesc, addDesc, removeDesc, updateDesc}= descripcionSlicesa.actions;
export default descripcionSlicesa.reducer
const baseUrl = 'https://colmeneroback-dev-bxzc.1.us-1.fl0.io/descripts'
//obtener subcategorias
export const getDescThunk =()=>(dispatch)=>{
    const url=`${baseUrl}`
    axios.get(url)
        .then(res=>dispatch(setDesc(res.data)))
        .catch(err=>console.log(err))
}
//crear subcategorias
export const addDescThunk =(data)=>(dispatch)=>{
    console.log(data)
    const url=`${baseUrl}`
    axios.post(url,data)
        .then(res=>dispatch(addDesc(res.data)))
        .catch(err=>console.log(err))
}
//eliminar subcategoria
export const deleteDescThunk = (id)=>(dispatch)=>{
    const url=`${baseUrl}/${id}`
    axios.delete(url)
        .then(res=> {
            console.log(res.data)
            dispatch(removeDesc(id))
        })
        .catch(err => console.log(err))
}
//editar categoria
export const UpdateDescThunk = (id, data)=>(dispatch)=>{
    const url=`${baseUrl}/${id}`
    axios.put(url, data)
        .then(res => {
            dispatch(updateDesc(res.data))
        })
        .catch(err => console.log(err))
}