import React from 'react'

function One(props) {
  return (
    <div>
        <div className='text-center mt-3'>
      <label htmlFor='offset' className='me-2'>Offset</label>
      <select 
        id='offset'
        className='me-3'
        onChange={props.handleChange}
        >
        <option value='0'>0</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
      </select>
      <label htmlFor='limit' className='me-2'>Limit</label>
      <select 
        id='limit'
        onChange={props.handleChange}
      >
        <option value='10'>10</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='0'>0</option>
      </select>
      </div>
      {
      props.datas.map(data=>{
        return(
          <div className='p-5' key={data.id}>
            <h3>Name: {data.name}</h3>
            <p>ID : {data.id}</p>
            <p>Username: {data.username}</p>
            <p>email :{data.email}</p>
            <p>Address: {data.address.street},{data.address.suite},{data.address.city}
            <br />ZipCode : {data.address.zipcode}<br/>Geo : {data.address.geo.lat} ,{data.address.geo.lng}
            </p>
            <p>Phone: {data.phone}</p>
            <p>Website: {data.website}</p>
            <p>Componay: {data.company.name}
            <br />{data.company.catchPhrase}
            <br />Business: {data.company.bs}
            </p>
          </div>
        )
      })
      }
    </div>
  )
}

export default One