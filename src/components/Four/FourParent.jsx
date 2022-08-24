import React,{useState,useRef,useEffect} from 'react'
import FourChild from './FourChild'

function Four() {
    const [parent,setParent] = useState('I need to be updated from my child')
  return (
    <div>
      <h1 className='p-5'>{parent}</h1>
      <FourChild parent={parent} setParent={setParent}/>
    </div>
  )
}

export default Four