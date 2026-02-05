import React from 'react'
import { Bookmark } from "lucide-react";
function Card(props) {
  return (
   <div className='herocard flex gap-5 '>
   
           <div className="card p-3.5 size-70 h-80 bg-white rounded-xl shadow-2xl ">
             <div className="logo mb-4 flex items-center justify-between">
               <img src={props.brand} alt="" className=' w-13 h-13 rounded-full object-cover border-2 border-gray-400' />
               <button className='px-8 py-2 bg-[#d3cdcdaf] rounded-4xl flex gap-1.5 '>Save <Bookmark /></button>
             </div>
             <div className="heading  mb-15">
               <h1 className='text-xl font-semibold mb-2'>{props.company} <span className=' text-sm text-gray-500 ml-2 '>{props.date}</span></h1>
               <h1 className=' text-[22px] font-bold '>{props.post}</h1>
               <div className="status flex gap-1.5">
                 <h3 className=' text-xs px-2 py-1 bg-[#e5e5e574] rounded-sm inline-block'>{props.tag1}</h3>
                 <h3 className=' text-xs px-2 py-1 bg-[#e5e5e574] rounded-sm inline-block'>{props.tag2}</h3>
               </div>
             </div>
             <hr className='text-[#464242d5]  mb-3' />
          <div className="herobtn flex items-center justify-between">
              <div className="btn ">
               <h1 className=' text-[18px] font-medium'>$120/hr</h1>
               <span className=' text-sm text-gray-500 ml-2'>{props.location}</span>
             </div>
               <button className='px-6 py-1.5 bg-[#060606] text-cyan-50 rounded-4xl ' >Apply now</button>
   
          </div>
           </div>
   
         </div>
  )
}

export default Card