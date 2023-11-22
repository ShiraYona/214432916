import {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
const Parasha=(title)=>{
    const [parasha,setParasha]=useState([])
    const loction=useLocation()
    const currentParasha=loction.state
    return(<>
   {parasha && parasha.map(i=>{
   if (i.className==="parashat"){
    alert("ee")
        return <h1>{i.className}</h1>
    }
   }
  
    )}

    </>

    )
}
export default Parasha;