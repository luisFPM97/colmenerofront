import { configureStore } from "@reduxjs/toolkit"
import empresas from "./slices/empresa.slice"
import categorias from "./slices/categoria.slice"
import subcategorias from "./slices/subcategorias.slice"

export default configureStore({
    reducer:{
        empresas,
        categorias,
        subcategorias
    }
})