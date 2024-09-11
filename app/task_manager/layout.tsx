import React from 'react'
import Providers from '../_components/providers/Providers'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <Providers>
        {children}
    </Providers>
  )
}

export default layout
