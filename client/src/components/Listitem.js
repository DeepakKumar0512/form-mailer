import React from 'react'

const Listitem = (props) => {
    const { detail } =props
  return (
    <div className='row mb-2 d-flex flex-row mb-3'>
    <div className="card my-2 mx-2">
      <div className="card-body">
        <h5 className="card-title">Name: {detail.name}</h5>
        <h5 className="card-title">Dob: {detail.dob}</h5> 
        <h5 className="card-title">Email: {detail.email}</h5>
        <h5 className="card-title">Phone No: {detail.phone_no}</h5>
      </div>
      </div>
  </div>
  )
}

export default Listitem