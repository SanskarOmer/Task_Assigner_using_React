/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  return (
    <div>
      <AuthContext.Provider value={'sanskar'}>
         {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider