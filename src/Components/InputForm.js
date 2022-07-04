import React from 'react'

const InputForm = ({bgColor, setColorValue}) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
    >
      <label>
        <input
          className='InputForm' 
          autoFocus
          type='text'
          placeholder='Add CSS color (name , #HEX , RGB , RGBA)'
          required
          value={bgColor}
          onChange={(e) => setColorValue(e.target.value)}
        />
      </label>
    </form>
  )
}

export default InputForm