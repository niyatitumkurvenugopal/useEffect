import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

function UseEffectWithArray() {

    const [animals, setanimals] = useState([])

    useEffect(()=>{
        if(animals.length>0){
            console.log("useEffect [animals] executed");
        }
    },[animals])

    let addAnimal=()=>{
        let animalsCopy = [...animals]
        animalsCopy.push("Kangroo")
        setanimals(animalsCopy)
    }
    return (
        <div>
            <button onClick={addAnimal}>Add Animal</button>
            {
                animals.map((val,idx)=>{
                    return <p key={val+idx}>{val} at index {idx}</p>
                })
            }
        </div>
    )
}

export default UseEffectWithArray
