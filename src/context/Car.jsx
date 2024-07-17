import { createContext, useState, useContext } from "react";

const CarContext = createContext(null);

export const CarProvider = (props)=>{
    const Herotext = [{text1:"Dive into" , text2: "what you love"},
        {text1:"indulge",text2:"your passions"},{text1:"Give in to",text2:"your passions"}
    ]
    const [Herono, setHerono] = useState(0);
    const [Playvideo , setPlayvideo] = useState(false);
    return(
        <CarContext.Provider value={{Herono , setHerono ,Playvideo, setPlayvideo , Herotext}}>{props.children}</CarContext.Provider>
    )
}

export const useCar = ()=>{
    return useContext(CarContext);
}