import React from 'react'
import Heading from './components/Heading'
import Input from './components/Input'

import ParaList from './components/ParaList';
function App() {
  
  return (
    <>
    <div className='h-fit bg-orange-300'>
      <Heading></Heading>
      <Input></Input>
      <ParaList></ParaList>
      </div>
    </>
  )
}

export default App