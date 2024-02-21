import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/personalinfo.css";
import Axios from "axios";
function PersonalInfo(){
  const{id} = useParams();
  // const[errmsg,setErrMsg] = useState("");
  const [email,setEmail] = useState("");
  const [phno , setPhno] = useState("");
  const [college , setCollege] = useState("");
  const [gradYear , setGradeYear] = useState();
  const [address , setAddress] = useState("");
  const [degree,setDegree] = useState("");
  const navigate = useNavigate();

  const infoCheck = (e)=>{
    Axios.post('http://localhost:3001/ent_personal_info' , {id:id ,email : email , phno : phno , college : college , grad_year : gradYear , address : address , degree : degree}).then(
      (response)=>{
        console.log(response.data);
      }
    )
    alert("you have successfully registered");
    navigate('/details');

  }

  return(
    <div className="pi-outer">
      <div className = "pi-inner">
        <div className="pi-head">
          <h1>Personal Info</h1>
        </div>
        <div className="pi-form">
          <form action="" name="pi-info">
            <div className="in-ele pi-ele">
              <label htmlFor="pi-email">Email:</label>
              <input type="email" name="pi-info" id="pi-email" onChange ={(e)=>{setEmail(e.target.value)}} required/>
            </div>
            <div className="in-ele pi-ele">
              <label htmlFor="pi-phno">Phone Number:</label>
              <input type="number" min = "1000000000" max = "9999999999" name="pi-info" id="pi-phno" onChange ={(e)=>{setPhno(e.target.value)}} required />
            </div>
            <div className="in-ele pi-ele">
              <label htmlFor="pi-clg">College :</label>
              <input type="text" name="pi-info" id="pi-clg" onChange ={(e)=>{setCollege(e.target.value)}} required />
            </div>
            <div className="in-ele pi-ele">
              <label htmlFor="pi-deg">Degree :</label>
              <input type="text" name="pi-info" id="pi-deg" onChange ={(e)=>{setDegree(e.target.value)}} required />
            </div>
            <div className="in-ele pi-ele">
              <label htmlFor="pi-gradyear">Graduation Year :</label>
              <input type="number" name="pi-info" id="pi-gradyear" min="1990" max="2024" onChange ={(e)=>{setGradeYear(e.target.value)}} required />
            </div>
            <div className="in-ele pi-ele">
              <label htmlFor="pi-address">Address :</label>
              <input type="text" name="pi-info" id="pi-address" onChange ={(e)=>{setAddress(e.target.value)}} required />
            </div>
            {/* <div className="err-msg">{errmsg}</div> */}
            <div className="sub-but">
              <button onClick ={infoCheck} >Submit</button>
            </div>
          </form>
          <div className = "pi-links">
            <Link to='/'>Enter a new Employee</Link>
            <Link to='/details'>View Tables</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PersonalInfo;