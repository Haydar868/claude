import { createContext, useState } from "react";

export let ClaudMenuContext = createContext(null)


export let ClaudMenuProvider = ({children})=>{

let [cluadeMenu,setClaudeMenu] = useState(false)

    return (
        <ClaudMenuContext.Provider value={{}}>
{
    children
}
        </ClaudMenuContext.Provider>
    )
}