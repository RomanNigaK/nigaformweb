import React from 'react';
import cn from './style.module.css';
export const Input =(props)=>{

  return(<div>
    <input type="text" name="email" placeholder='Emailuser' {...props} className={cn.inpt} />
  </div>
    
  )
}