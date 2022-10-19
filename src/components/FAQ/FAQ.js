import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import style from './faq.module.css';

function FAQ({id,title,description}) {
    const [toggle,setToggle] = useState(false);
  return (
    <article className={style.faq}>
         <div>
              <h4>{title}</h4>
              <button onClick={()=>setToggle(!toggle)} className={style.btn}>{toggle ? <FaMinusCircle/>: <FaPlusCircle/>}</button>
            {toggle && <p>{description}</p>}

         </div>
    </article>

  )
}

export default FAQ