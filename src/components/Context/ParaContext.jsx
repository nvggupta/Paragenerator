import {createContext, React,useContext, useState} from 'react'

export  const ParaContext = createContext(null);

 const ParaProvider = (props)=>{
const [input , setInput] = useState(0);

    return(
        <>
            <ParaContext.Provider value={{input, setInput}}>
                {props.children}
            </ParaContext.Provider>
        </>
    )

}
 export default ParaProvider;