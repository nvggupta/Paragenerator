import { useContext, useEffect, useState } from "react";
import { ParaContext } from "./Context/ParaContext";
function input() {
 const ParaInput = useContext(ParaContext);
 const [localeInput , setLocaleInput] = useState();
  const getLocaleInput = (e)=>{
    setLocaleInput(e.target.value);
  } 
  const setInputs = ()=>{
        ParaInput.setInput(localeInput);
  }
  return (
    <>
        <center className='mt-5'>
            <label>Paragraph: </label>
            <input type='number' className='border-2 border-black rounded-lg w-20' onChange={getLocaleInput}></input>
            <button className='p-2 ms-5 bg-red-700 rounded-lg text-white' onClick={setInputs}>Generate</button>
        </center>
    </>
  )
}

export default input