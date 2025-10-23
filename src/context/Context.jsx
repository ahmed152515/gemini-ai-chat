import { createContext, useState } from 'react'
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setinput] = useState("");
    const [recentPrompt, setrecentPrompt] = useState("");
    const [prevPrompts, setprevPrompts] = useState([]);
    const [showResult, setshowResult] = useState(false);
    const [loading, setLoading] = useState (false);
    const [resultData, setresultData] = useState ("");

 const onSent = async (prompt) =>{

    setresultData("");
    setLoading(true);
    setshowResult(true);
    setrecentPrompt(input);
    const response = await runChat(input);
    setresultData(response);
    setLoading(false);
    setinput("")
 }

   
    const contextValue = {

        prevPrompts,
        setprevPrompts,
        onSent,
        setrecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setinput,


    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;