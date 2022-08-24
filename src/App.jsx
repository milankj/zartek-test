import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Routes,Route} from 'react-router-dom'
import One from './components/One'
import Home from './components/Home'
import Two from './components/Two'
import Three from './components/Three'
import Four from './components/Four/FourParent'

function App() {
  const [datas,setDatas] = useState([])
  const [start,setStart] = useState(0)
  const [limit,setLimit] = useState(10) 
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users?_limit=${limit}&_start=${start}`)
      .then(res=>{
        if(res.status === 200){
          setDatas(res.data)
        }
      })
  },[start,limit])
  const handleChange = (e)=>{
    console.log(e.target.value)
    if(e.target.id === 'offset'){
      setStart(parseInt(e.target.value))
    }
    if(e.target.id ==='limit'){
      setLimit(parseInt(e.target.value))
    }
  }
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route
          path='/one'
          element={
            <One
              start={start}
              setStart={setStart}
              handleChange={handleChange}
              datas={datas}
            />
          }
        />
        <Route path='/two' element={<Two/>}/>
        <Route path='/three' element={<Three/>}/>
        <Route path='/three' element={<Three/>}/>
        <Route path='/four' element={<Four/>}/>      
        </Routes>
      </div>
  )
}

export default App
