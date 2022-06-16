
import { useState } from 'react';
export default function Exo() {
    let [num,setnum] = useState(0); 
    
    return (
      <div className="Exo" >
        <button onClick={()=>{
          setnum(num+1)}}>Nombre de click : {num}</button>
      </div>
    );
  }