import React from 'react'
import { useDispatch } from 'react-redux'
import { setShowRegister } from '../../../redux/slices/util'
import Register from './register'

const RegModal = () => {
  const dispatch=useDispatch()

  
  return (
    <div className="redwine__modal-reg"  onClick={()=>dispatch(setShowRegister(false))}>
        <Register  />
    </div>
  )
}

export default RegModal