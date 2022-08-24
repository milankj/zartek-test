import React from 'react'
import { nanoid } from 'nanoid'

function FourChild(props) {
  return (
    <div className='m-5'>
        <button onClick={()=>props.setParent(`Child Changed Me!`)}>Click Me!</button>
    </div>
  )
}

export default FourChild