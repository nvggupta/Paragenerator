import React, { useState } from 'react'

function input({onTakeInput}) {
 
    const [inputs , setInputs] = useState(0);
    const generateInputs = ()=>{
            onTakeInput(inputs);
    }
   
  return (
    <>
        <center className='mt-5'>
            <label>Paragraph: </label>
            <input type='number' className='border-2 border-black rounded-lg w-20' onChange={(e) => setInputs(e.target.value)}></input>
            <button className='p-2 ms-5 bg-red-700 rounded-lg text-white' onClick={generateInputs}>Generate</button>
        </center>
    </>
  )
}

export default input