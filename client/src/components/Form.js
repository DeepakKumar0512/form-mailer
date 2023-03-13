import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";


const Form = () => {
    const [credentials, setCredentials] = useState({name:"",dob:"",email:"",phone_no:""})
    let navigate = useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const response = await fetch("https://form-mailer-back.onrender.com/form/addform",{
          method:"POST",
          headers: {
            'Content-Type': 'application/json',
            },
          body:JSON.stringify({name:credentials.name,dob:credentials.dob,email:credentials.email,phone_no:credentials.phone_no})
        })
        // const json=await response.json()
        if(response.status===400){
          alert("Please try to login with correct credentials")
          navigate("/login");
        }
        else if(response.status===500){
          alert("Server Error || Please try after some time")
          navigate("/login");
        }
        else{
        // console.log(json)
        // console.log(credentials)
        setCredentials({name:"",dob:"",email:"",phone_no:""})
        navigate("/list")
        }
    }

    const onChange =(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
      }

  return (
    <div><h4>User's form</h4>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="name" className="form-control" name='name' minLength="6" value={credentials.name}  onChange={onChange} id="name" aria-describedby="emailHelp"/>  
    </div>
    <div className="mb-3">
    <label htmlFor="dob" className="form-label">DOB</label>
    <input type="date" className="form-control" name='dob' value={credentials.dob}  onChange={onChange} id="birthday"/>
    </div>
    <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' minLength="6" value={credentials.email}  onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>  
    </div>
    <div className="mb-3">
    <label htmlFor="phone_no" className="form-label">Phone No.</label>
    <input  type="tel" id="phone" className="form-control" minLength="10" maxLength="10" name="phone_no" value={credentials.phone_no}  onChange={onChange}/>
    </div>
  
  <button type="submit" disabled={credentials.name==="" ||credentials.dob==="" ||credentials.email===""||credentials.phone_no===""} className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Form
