import React, { useContext } from 'react'
import { DataContext } from '../../hooks/DataContext'

export const FireScreen = () => {

    const data = useContext(DataContext);
    console.log(data)
  return (
    <div>
        <h2>FireScreen</h2>
    </div>
  )
}
