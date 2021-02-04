import React, {useState} from "react";

import "./Styles/Teste.css";

export default function Teste(){
    const[validador, setValidador] = useState("")
    function fuc1(){
            return(
                <div className="lei">
                    <select>
                        <option value={validador}>lei</option>
                    </select>
                    <button onClick={()=>alert(validador)}>Lei</button>
                </div>
            )
        }
    function fuc2(){
        if(validador == 10 ){
            return(
                alert(validador)
            )
        }else{
            return(
                alert("qualquer outra coisa")
            )
        }
        
    }
    return(
        <div className="teoria-lei">
            <div className="inputs"></div>
            <input type="text" value={validador} onChange={(e)=>setValidador(e.target.value)}/>
            <button onClick={()=>fuc2()}>teoria</button>
            {
                fuc1()
            }
            
        </div>
    )
}