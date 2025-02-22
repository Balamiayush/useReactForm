import React, { useState } from 'react'
import Input from './components/Input'
import Card from './components/Card'
const App = () => {
  const [users,setUsers] = useState([])
  const handleFormSubmit = (data)=>{
    setUsers([...users,data])
  }
  return (
    <div className='
     w-full h-screen
     flex flex-col items-center justify-center gap-10'>
        <Input handleFormSubmit={handleFormSubmit} />
        <div className='flex flex-wrap items-center justify-center gap-10'>
        <Card users={users} />
        </div>
    </div>
  )
}

export default App