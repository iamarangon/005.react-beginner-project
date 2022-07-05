import React from 'react'

const InputForm = ({
    bgColor, setColorValue ,
    isDarkText, setIsDarkText
  }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
    >
      <label>
        <input
          className='InputForm' 
          autoFocus
          type='text'
          placeholder='Add color ( name , #HEX , RGB(r,g,b) , RGBA(r,g,b,a) )'
          required
          value={bgColor}
          onChange={(e) => setColorValue(e.target.value)}
        />
      </label>
      <button
        type='button'
        onClick={() => setIsDarkText(!isDarkText)}
      >
        Toggle text color
      </button>
    </form>
  )
}

export default InputForm