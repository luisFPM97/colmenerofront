import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const subcategoriaSlices = createSlice({
    name: 'subcategorias',
    initialState: [],
    reducers:{
        setSubcat:(currentValue, action) => action.payload,
        addSubcat: (currentValue,action)=>[...currentValue,action.payload],
    }
})
export const {setSubcat, addSubcat}=subcategoriaSlices.actions;
export default subcategoriaSlices.reducer
const baseUrl = 'https://colmeneroback-dev-bxzc.1.us-1.fl0.io/subcategorias'
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