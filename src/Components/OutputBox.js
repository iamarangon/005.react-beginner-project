import React from 'react'

const OutputBox = ({ bgColor , isDarkText }) => {
  return (
    <section
        className='App-output'
        style={{
          backgroundColor: bgColor,
          color: isDarkText ? '#000' : '#FFF'
        }}
    >
        <p>{bgColor ? bgColor : "Empty Value"}</p>
    </section>
  )
}

OutputBox.defaultProps = {
  bgColor: 'Empty Value'
}

export default OutputBox