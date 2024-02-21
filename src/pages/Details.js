import React from "react";
import { Link } from "react-router-dom";
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
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>College</TableCell>
                <TableCell>Degree</TableCell>
                <TableCell>Graduation Year</TableCell>
                <TableCell>Address</TableCell>
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
                    <TableCell>{employee.email}</TableCell>
                    <TableCell>{employee.phno}</TableCell>
                    <TableCell>{employee.college}</TableCell>
                    <TableCell>{employee.degree}</TableCell>
                    <TableCell>{employee.grad_year}</TableCell>
                    <TableCell>{employee.address}</TableCell>
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