import React, { useEffect } from 'react'
import { getSubcatThunk } from '../store/slices/subcategorias.slice'
import { useDispatch } from 'react-redux'

const Subcat = () => {

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getSubcatThunk())
    }, [])
    

  return (
    <div>Subcat</div>
  )
}

export default Subcat