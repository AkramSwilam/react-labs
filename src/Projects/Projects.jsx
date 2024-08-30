import { useEffect, useState } from "react"

export default function Projects(){
    let [userName,setUserName] = useState("Akram")

console.log(userName);

    function changeName(){
        setUserName("Mohamed")
    }
    useEffect(()=>{
        console.log("DidUpdate");
    },[userName])

    return <>
    {console.log("Render")}
    <h1>{userName}</h1>
    <button onClick={changeName}>change</button>
    </>
}