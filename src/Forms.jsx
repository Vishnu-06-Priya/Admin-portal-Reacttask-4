import React, { useState } from 'react'

function Forms() {
    const [textValue, setTextValue] = useState("hello")
// console.log(textValue)
    
  return (
    <div>
        <input type = {"text"} value = {textValue} onChange = {(text) => setTextValue (text.target.value)} />
    </div>
  )
}

export default Forms