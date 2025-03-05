import { useEffect, useRef, useCallback } from "react";

export default function useTimeout(callback, delay, setTimeoutOnFirstCall = false) {
    const callbackRef = useRef(callback);
    const timeoutRef = useRef();
    
    useEffect(() =>{
        callbackRef.current = callback;
    }, [callback]);

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
    }, [delay]);

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current)
    }, []);

    useEffect(() => {
        if(setTimeoutOnFirstCall) set();
        
        return clear
    }, [delay, set, clear])
    
    const reset = useCallback(() => {
        clear()
        set()
    }, [clear, set]);
    
    return { reset, clear }
}