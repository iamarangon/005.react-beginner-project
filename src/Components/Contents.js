import React from 'react'
import { useState } from 'react'
import InputForm from './InputForm'
import OutputBox from './OutputBox'

const Contents = () => {
  const [bgColor,setColorValue] = useState('')
  const [isDarkText , setIsDarkText] = useState(true)

  return (
    <body className='App-body'>
        <OutputBox
          bgColor={bgColor} 
          isDarkText = {isDarkText}
        />
        <InputForm 
          bgColor={bgColor}
          setColorValue={setColorValue}
          isDarkText = {isDarkText}
          setIsDarkText = {setIsDarkText}
        />
    </body>
  )
}

export default Contents