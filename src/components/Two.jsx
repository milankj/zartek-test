import React,{useState} from 'react'

function Two() {
    const [toggle,setToggle] = useState(true)
    console.log(toggle)
  return (
    <div className='text-center mt-5'>
        <button 
            className=''
            onClick={()=>setToggle(prevToggle=>!prevToggle)}
            >
                {toggle ? 'Hide' : 'Show'}
        </button>
        {toggle && <h1 className='p-5'>Toggled/   Toggle</h1>}  
    </div>
  )
}

export default Two