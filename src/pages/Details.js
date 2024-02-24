import React from "react";
import { Link , useNavigate } from "react-router-dom";
import {useState ,useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "../css/table.css"
import Axios from "axios";
function Details(){

  const head = ["Id","Name","Date of Birth","Department","Gender","Designation","Salary"]
  const [rows,setRows] = useState([])
  const [data,setData] = useState({});
  const navigate = useNavigate();
  useEffect(()=>{
    /*const data = {
      0:{id:"1",name:"karthik" , dob:"04/02/2004" , dept : "CSE" , gend:"male" ,desgn:"Mr",salary:"50"},
      1:{id:"1",name:"karthik" , dob:"04/02/2004" , dept : "CSE" , gend:"male" ,desgn:"Mr",salary:"50"},
    }*/
    Axios.get('http://localhost:3001/get_info').then((response)=>{
      setData(response.data);
    })
    const newRows = Object.keys(data).map(key => data[key]);
    setRows(newRows);
  },[data])
  
  
  
  return(
    <div className="emp-table">
      <div className="back-link">
          <Link to="/">Registration page</Link>
        </div>
      <div className="tab-head">
        <h1>Employee Details</h1>
      </div>
      <div className="tab-con">
        <TableContainer style={{"width" : "100%"}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Date of Birth</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Designation</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell style = {{"textAlign" : "centre"}}>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>College</TableCell>
                <TableCell>Degree</TableCell>
                <TableCell>Graduation Year</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Options</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                rows.map((employee,index)=>(
                  <TableRow key = {index}>
                    <TableCell>{employee.id}</TableCell>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>{employee.dob.substring(0,10)}</TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.gender}</TableCell>
                    <TableCell>{employee.designation}</TableCell>
                    <TableCell>{employee.salary}</TableCell>
                    <TableCell>{employee.email === null ? '-' : employee.email }</TableCell>
                    <TableCell>{employee.phno === null ? '-' : employee.phno}</TableCell>
                    <TableCell>{employee.college === null ? '-' : employee.college }</TableCell>
                    <TableCell>{employee.degree === null ? '-' : employee.degree}</TableCell>
                    <TableCell>{employee.grad_year === null ? '-' : employee.grad_year}</TableCell>
                    <TableCell>{employee.address === null ? '-' : employee.address}</TableCell>
                    <TableCell><button onClick={()=>{navigate(`/personal_info/${employee.id}`)}} className="up-button">Update Info</button></TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>

        </TableContainer>
      </div>
    </div>
  )
}
export default Details;