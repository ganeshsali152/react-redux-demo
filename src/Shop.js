import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';

const Shop = () => {

  const dispatch = useDispatch();
  const {dipositMoney,withdrawMoney,toggleTheme} = bindActionCreators(actionCreators,dispatch);

  return (
    <>
    <div>
        <h2>Balance</h2>
        <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
        Update
        <button className="btn btn-primary mx-2" onClick={()=>{dipositMoney(100)}}>+</button>
    </div>
      <button className="btn btn-primary mx-2" onClick={toggleTheme}>Toggle Theme</button>
    </>
  )
}

export default Shop