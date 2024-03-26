import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const descripcionSlicesa = createSlice({
    name: 'descripciones',
    initialState: [],
    reducers:{
        setDesc: (currentValue,action)=>action.payload,
        addDesc: (currentValue,action)=>[...currentValue,action.payload],
    }
})
export const {setDesc, addDesc}= descripcionSlicesa.actions;
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