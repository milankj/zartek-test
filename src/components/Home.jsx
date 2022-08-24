import React from 'react'
import {useNavigate} from 'react-router-dom'
function Home() {
    const navigate = useNavigate()
  return (
    <div className='d-flex justify-content-around align-items-center mt-5'>
    <button onClick={()=>navigate('/one')}>Question 1</button>
    <button onClick={()=>navigate('/two')}>Question 2</button>
    <button onClick={()=>navigate('/three')}>Question 3</button>
    <button onClick={()=>navigate('/four')}>Question 4</button>
    </div>
  )
}

export default Home