import React from "react";
import { Link } from "react-router-dom";
import {useState} from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/login.css"
function Login(){
  const [name,setName] = useState("");
  const [id,setId] = useState("");
  const [dept,setDept] = useState("");
  const[dob,setDob] = useState("");
  const[gend,setGend] = useState("");
  const[designation,setDesignation] = useState("");
  const[salary,setSalary] = useState("");
  const[errMsg,setErrMsg] = useState("");
  const navigate = useNavigate()
  const submitClick = ()=>{
    setErrMsg("");
    if(name==="" || id ==="" || dept === "" || dob === "" || designation ==="" || salary === ""){
      return setErrMsg("Fill in all the fields");
    }
    if(document.getElementById("emp-male").checked === false && document.getElementById("emp-female").checked === false){
      return setErrMsg("Select any of the Gender");  
    }
    if(name.length > 30){
      return setErrMsg("Name should not exceed length 30"); 
    }
    if(salary.length > 8){
      return setErrMsg("Salary should not exceed length 8") 
    }
    if(document.getElementById("emp-male").checked === true){
      setGend("Male");
    }
    else{
      setGend("Female");
    }
    console.log(name,gend);
    Axios.post('http://localhost:3001/enter_info' , {name:name , id:id , dept : dept , dob : dob , gender : gend , desgn : designation , salary : salary}).then((response)=>{
      console.log(response.data);
    });
    alert ("you have succesfully resistered , Now fill in more personal detaial")
    return navigate(`/personal_info/${id}`);
  }
  return (
    <div className = "login-outer">
      <div className = "login-inner">
        <div className="log-header"> <h1>Employee Registration</h1></div>
        <div className = "log-form">
          <form>
            <div className="in-ele">
              <label htmlFor="emp-name">Employee Name :</label>
              <input type="text" name="login-form" id="emp-name" onChange={(e)=>{setName(e.target.value)}} required />
            </div>
            <div className="in-ele" >
              <label htmlFor="emp-id">Employee id :</label>
              <input type="text" name="login-form" id="emp-id" onChange={(e)=>{setId(e.target.value)}} required />
            </div>
            <div className="in-ele">
              <label htmlFor="emp-dept">Employee Department :</label>
              <select name="login-form" id="emp-dept" onChange={(e)=>{setDept(e.target.value)}}>
                <option value="Marketing">Marketing</option>
                <option value="General Manager">General Manager</option>
                <option value="Deployment">Deployment</option>
                <option value="Developer">Developer</option>
                <option value="Data Analyst">Data Analyst</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="in-ele">
              <label htmlFor="emp-dob">Employee Date of Birth :</label>
              <input type="date" name="login-form" id="emp-dob" onChange={(e)=>{setDob(e.target.value)}} required />
            </div>
            <div className="in-ele">
              <label htmlFor="emp-gender">Employee Gender :</label>
                <div className="gend-group">
                <div>
                  <input type="radio" name="login-form" id="emp-male" value="male" />
                  <label htmlFor="emp-male"> Male</label>
                </div>
                <div>
                  <input type="radio" name="login-form" id="emp-female" value = "female" />
                  <label htmlFor="emp-female"> female</label>
                </div>
              </div>
              
            </div>
            <div className="in-ele">
              <label htmlFor="emp-desg">Employee Designation :</label>
              <input type="text" name="login-form" id="emp-desg" onChange={(e)=>{setDesignation(e.target.value)}} required />
            </div>
            <div className="in-ele">
              <label htmlFor="emp-salary">Employee Salary :</label>
              <input type="number" name="login-form" id="emp-salary" onChange={(e)=>{setSalary(e.target.value)}} required />
            </div>
            <div className="err-msg">{errMsg}</div>
            <div className="sub-but" onClick={submitClick}><button type="button">Submit</button></div>
          </form>
        </div>
        <div className="details-link">Click <Link to='/details'> here </Link> to view Employee details</div>
      </div>
    </div>
  )

}
export default Login;