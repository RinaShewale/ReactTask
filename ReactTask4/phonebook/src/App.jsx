import React, { useState } from 'react'
import Card from './components/Card'

function App() {

  const [imageURL, setimageURL] = useState("")
  const [UserName, setUserName] = useState("")
  const [contact, setContact] = useState("")
  const [allUsers, setallUsers] = useState([])
  const [viewContacts, setViewContacts] = useState(false);

  const deletecontact = (idx) => {
    const copyuser = [...allUsers]
    copyuser.splice(idx, 1)
    setallUsers(copyuser);

  }


  const submitform = (e) => {
    e.preventDefault()

    const oldusers = [...allUsers]
    oldusers.push({ imageURL, UserName, contact })

    setallUsers(oldusers)
    setUserName("")
    setimageURL("")
    setContact("")
  }




  return (
    <div className=' relative bg-[#282828] w-full min-h-screen flex flex-col items-center justify-start pt-10'>

      {!viewContacts &&
        (
          <div className="formcontainer w-[400px] h-[350px] bg-[#fff] rounded-md  ">

            <form onSubmit={(e) => {
              submitform(e)
            }} className='flex flex-col gap-4 p-4  '>

              <input value={imageURL} onChange={(e) => { setimageURL(e.target.value) }}
                required type="text" placeholder='Image URL ' className='rounded-md py-3 px-3 bg-[#333] text-white placeholder-gray-400 outline-none' />


              <input value={UserName} onChange={(e) => { setUserName(e.target.value) }}
                required type="text" placeholder='Enter username' className='rounded-md py-3 px-3 bg-[#333] text-white placeholder-gray-400 outline-none' />


              <input value={contact} onChange={(e) => { setContact(e.target.value) }}
                required type='tel' placeholder='Enter phone number' className='rounded-md py-3 px-3 bg-[#333] text-white placeholder-gray-400 outline-none' />

              <div className="btn flex item-center justify-center gap-3 mt-10">

                <button type="submit" className='py-2.5 px-3 bg-cyan-800 rounded-md text-white active:scale-95'>Create contact</button>
                <button onClick={() => {
                  setViewContacts(true)
                }} type="button" className='py-2.5 px-3 bg-cyan-800 rounded-md text-white active:scale-95'>view contact</button>
              </div>


            </form>
          </div>
        )}

      {viewContacts && (
        <div className="all-users
  w-full
  min-h-screen
  pt-20
  px-6
  flex
  flex-wrap
  justify-center
  gap-6">

          <button
            onClick={() => setViewContacts(false)}
            className="fixed top-4  left-1/2 -translate-x-1/2  py-2 px-6  bg-cyan-800  text-white  rounded-md   active:scale-95  z-50 mb-6 ">
            Back to Form
          </button>


          {allUsers.length === 0 ? (
            <p className= " text-3xl text-white ">No contacts available.</p>
          ) : (
            allUsers.map((elem, idx) => (
              <Card
                key={idx}
                elem={elem}
                idx={idx}
                deletecontact={deletecontact}
              />
            ))
          )}
        </div>
      )}

    </div>
  )
}

export default App





