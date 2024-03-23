import { configureStore } from "@reduxjs/toolkit"
import empresas from "./slices/empresa.slice"

export default configureStore({
    reducer:{
        empresas
    }
})