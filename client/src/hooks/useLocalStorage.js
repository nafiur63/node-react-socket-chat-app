import { useEffect, useState } from "react"

const PREFIX ='chat-app-'

const useLocalStorage = (key,initialValue) => {
    
    const PrefixedKey = PREFIX + key

    const [value,setValue] = useState(()=> {
        const jsonValue = localStorage.getItem(PrefixedKey)
        if(jsonValue != null) return JSON.parse(jsonValue)
        if(typeof initialValue === 'function') {
            return initialValue()
        }
        else return initialValue
    })

    useEffect(()=> {
        localStorage.setItem(PrefixedKey, JSON.stringify(value))
    }, [PrefixedKey,value])

    return [value, setValue]
}

export default useLocalStorage
