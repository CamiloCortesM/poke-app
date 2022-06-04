import React from 'react'
import { CountFunc } from './helpers/CountFunc';
import { pokefunc } from './helpers/pokefunc';
import AppRoutes from './routes/AppRoutes';

const MainApp = () => {
  CountFunc().then(data=>
      {
        for (let index = 0; index < data; index++) {
          pokefunc(index).then(dato=>{
            console.log(dato)
          })
        }
      }
    )
  

  return (
    <AppRoutes />
  )
}

export default MainApp;