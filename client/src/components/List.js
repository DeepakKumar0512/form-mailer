import React,{useEffect,useState} from 'react'
import Listitem from './Listitem';

const List = () => {
 const [details,setdetails] = useState([])
  useEffect(() => {
    fetchform()
    // return () => {
      
    // }
  }, [])
  
  const fetchform = async()=>{
    const response = await fetch("https://form-mailer-back.onrender.com/form/fetchall",{
      method:"GET"
    })
    const result=await response.json()
    setdetails(result)
    if(response.status===500){
      alert("Server Error || Please try after some time")
    }
  }         
  return (
    <div className='container'>
        <h3>Form List</h3>
    {
    details.map((detail)=>{
        return <Listitem key={detail._id} detail={detail} />
    })}
    </div>
  )
}

export default List