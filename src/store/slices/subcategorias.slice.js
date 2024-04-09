import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const subcategoriaSlices = createSlice({
    name: 'subcategorias',
    initialState: [],
    reducers:{
        setSubcat:(currentValue, action) => action.payload,
        addSubcat: (currentValue,action)=>[...currentValue,action.payload],
        removeSubcat: (currentValue,action)=>currentValue.filter(subcat=>subcat.id !== action.payload),
        updateSubcat:(state, action) => { 
            const updatedEmpresa = action.payload;
            return state.map(cat => cat.id === updatedCat.id ? updatedCat : cat);
          }
    }
})
export const {setSubcat, addSubcat, removeSubcat, updateSubcat}=subcategoriaSlices.actions;
export default subcategoriaSlices.reducer
const baseUrl = 'https://colmeneroback.onrender.com/subcategorias'
//obtener subcategorias
export const getSubcatThunk =()=>(dispatch)=>{
    const url=`${baseUrl}`
    axios.get(url)
        .then(res=>dispatch(setSubcat(res.data)))
        .catch(err=>console.log(err))
}
//crear subcategorias
export const addSubcatThunk =(data)=>(dispatch)=>{
    console.log(data)
    const url=`${baseUrl}`
    axios.post(url,data)
        .then(res=>dispatch(addSubcat(res.data)))
        .catch(err=>console.log(err))
}
//eliminar subcategoria
export const deleteSubcatThunk =(id)=>(dispatch)=>{
    const url=`${baseUrl}/${id}`
    axios.delete(url)
        .then(res =>{dispatch(removeSubcat(id))})
        .catch(err => console.log(err))
}
//editar subcategoria
export const UpdateSubcatThunk = (id, data)=>(dispatch)=>{
    const url=`${baseUrl}/${id}`
    axios.put(url, data)
        .then(res => {
            dispatch(updateSubcat(res.data))
        })
        .catch(err => console.log(err))
}