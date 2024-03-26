import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const categoriaSlices = createSlice({
    name:'categorias',
    initialState:[],
    reducers:{
        addCat:(currentValue, action)=>[...currentValue,action.payload],
        removeCat:(currentValue, action) =>currentValue.filter(cat=>cat.id !== action.payload),
        setCat:(currentValue, action) => action.payload,
    }
})
export const {addCat, setCat, removeCat}=categoriaSlices.actions;
export default categoriaSlices.reducer

const baseUrl = 'https://colmeneroback.onrender.com/categorias'

//obtener categorias
export const getCatThunk =()=>(dispatch)=>{
    const url=`${baseUrl}`
    axios.get(url)
        .then((res)=> dispatch(setCat(res.data)))
        .catch(err => console.log(err))
}
//crear categoria
export const addCatThunk = (data)=>(dispatch)=>{
    const url=`${baseUrl}`
    axios.post(url, data)
        .then(res => dispatch(addCat(res,data)))
        .catch(err => console.log(err))
}
//eliminar categoria
export const deleteCatThunk = (id)=>(dispatch)=>{
    const url=`${baseUrl}/${id}`
    axios.delete(url)
        .then(res=> {
            console.log(res.data)
            dispatch(removeCat(id))
        })
        .catch(err => console.log(err))
}