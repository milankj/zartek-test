import React,{useState} from 'react'

function Three() {
    const [text,setText] = useState('')
    const handleTextChange = (e)=>{
        setText(e.target.value)
    }
  return (
    <div className='text-center mt-5'>
        <input 
            type='text'
            placeholder='Enter Text'
            value={text}
            onChange={handleTextChange}
        />
        <h1 className='mt-5'>{text}</h1>
    </div>
  )
}

export default Three