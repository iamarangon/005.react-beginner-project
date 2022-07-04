import React from 'react'
import { useState } from 'react'
import InputForm from './InputForm'
import OutputBox from './OutputBox'

const Contents = () => {
  const [bgColor,setColorValue] = useState('')
  return (
    <body className='App-body'>
        <OutputBox bgColor={bgColor} />
        <InputForm 
          bgColor={bgColor}
          setColorValue={setColorValue}
        />
    </body>
  )
}

export default Contents