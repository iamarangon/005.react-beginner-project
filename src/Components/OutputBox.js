import React from 'react'

const OutputBox = ({ bgColor }) => {
  return (
    <section
        className='App-output'
        style={{backgroundColor: bgColor}}
    >
        <p>{bgColor ? bgColor : "Empty Value"}</p>
    </section>
  )
}

OutputBox.defaultProps = {
  bgColor: 'Empty Value'
}

export default OutputBox