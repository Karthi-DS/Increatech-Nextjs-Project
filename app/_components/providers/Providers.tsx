"use client";
import React from 'react'
import { Provider } from 'react-redux'
import { TaskStore } from '../taskstore/TaskStore'

const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <Provider store={TaskStore}>
        {children}
    </Provider>
  )
}

export default Providers
