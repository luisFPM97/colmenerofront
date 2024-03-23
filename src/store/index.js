import { configureStore } from "@reduxjs/toolkit"
import empresas from "./slices/empresa.slice"
import categorias from "./slices/categoria.slice"

export default configureStore({
    reducer:{
        empresas,
        categorias
    }
})