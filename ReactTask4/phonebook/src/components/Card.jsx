import React from 'react'

function Card(props) {
  return (
    <div>
       <div key={props.idx}  className="card w-[250px] h-[300px] bg-[#fffbfb] rounded-xl flex flex-col items-center p-4">
        <img
          className="w-27 h-27 object-cover rounded-full mb-3"
          src={props.elem.imageURL}
          alt="Profile"
        />

        <h1 className='text-2xl font-semibold mb-3'>{props.elem.UserName} </h1>
        <h3 className='text-1xl font-medium mb-3'>{props.elem.contact}</h3>
        <button onClick={()=>{
          props.deletecontact(props.idx)
        }} className="w-[30%] py-2 px-10 bg-gray-600 rounded-md text-white flex items-center justify-center active:scale-95">
          Remove
        </button>


      </div>
    </div>
  )
}

export default Card
