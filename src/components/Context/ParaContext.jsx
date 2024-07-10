import {createContext, React,useContext} from 'react'

export const ParaContext = createContext(null);

export const ParaProvider = (props)=>{

    return(
        <>
            <ParaContext.Provider>
                {props.children}
            </ParaContext.Provider>
        </>
    )

}
