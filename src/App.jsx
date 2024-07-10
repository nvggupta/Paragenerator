import React from 'react'
import Heading from './components/Heading'
import Input from './components/Input'
import { useState } from 'react';
import ParaList from './components/ParaList';
function App() {
  const [input , setInput] = useState(0);
  const takeInput = (inputs)=>
    {
      if(inputs>8)alert("invalid");
      else
        setInput(inputs);
      console.log('====================================');
      console.log(inputs);
      console.log('====================================');
      
  }
  return (
    <>
    <div className='h-fit bg-orange-300'>
      <Heading></Heading>
      <Input onTakeInput ={takeInput}></Input>
      <ParaList input={input}></ParaList>
      </div>
    </>
  )
}

export default App