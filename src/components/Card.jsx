import React from 'react'

const Card = ({users}) => {

  return (
    <>
    
    {
      users.map((items)=>
        <div className='w-52 h-52 bg-blue-400  rounded-2xl flex flex-col items-center justify-center '>
      <div className='img w-44 h-44 overflow-hidden rounded-xl bg-black'>
      <img src={items.url} className='w-full h-full object-cover  ' alt="" />
      </div>
      <p>{items.name}</p>
      </div>
      )
    }
    </>
  )
}

export default Card