import { useState } from "react";
import { useCallback } from "react";

export default function useOpenController(initialState){

const [isOpen, setOpenState] = useState(initialState);
   
const toggle = useCallback(() =>{
        setOpenState((state)=> !state);
    }, [setOpenState])

    return { isOpen, toggle};
}