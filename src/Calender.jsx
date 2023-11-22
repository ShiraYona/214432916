import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
//import styles from './css.module.css'
const Calender=()=>{
  const navigate = useNavigate()
    const [date, setDate] = useState([]);
    const [dateStart, setDateStart] = useState("");
    const [dateEnd,setDateEnd] = useState("");

     async function fetchData() {
      try{
      const result= await (await fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min-on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${dateStart}&end=${dateEnd}`))
      const data = await result.json()
      setDate(data)
      console.log("exellent");
            
      }
     catch(err){
      console.log("error!!!!!!"+err)
     }
    }
    useEffect(() => {
    }, [])

    const show = () => {
      fetchData(dateStart, dateEnd)
  }
    const p=(title)=>{
      navigate('/parasha',{state:date})
      
    }
   
    
        return (<>
      
          <input placeholder="הכנס תאריך התחלה" onBlur={(e) => setDateStart(e.target.value)}/>
          <input placeholder="הכנס תאריך סיום" onBlur={(e) => setDateEnd(e.target.value)}/>

          <button onClick={show}>הצג</button>
          
          {/* <button onClick={()=>navigate('/parasha')}> הצג פרשות שבוע בלבד</button> */}
         {date && date.map(i=>{
          return <> <div key ={i.id}></div>
           <button onClick={()=>p(i.date)}> הצג פרשת שבוע בלבד</button>
            <div >{i.title}</div> 
           <div >{i.start}</div>
           <div >{i.hebrew}</div>
           <div >{i.className}</div>
           <div>_______________________________________________________________________________________________________</div>
            </>
         })

         }
       
  
      </>)
}
export default Calender;










