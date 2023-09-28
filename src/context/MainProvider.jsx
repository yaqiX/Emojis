import { createContext, useState } from "react";

export const mainContext = createContext();

const MainProvider = (props) => {
    const [currentMood, setCurrentMood] = useState('neutral');
    const [compliments, setCompliments] = useState(0);

    return(
        <mainContext.Provider value={{
            currentMood,setCurrentMood,
            compliments,setCompliments
        }}>
            {props.children}
        </mainContext.Provider>
    )
};

export default MainProvider;