import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {




  const getCount = () => {
    let response =fetch('http://localhost:8090/counts');

    response.then(res=>res.json()).then(data => {

      //const count = data["COUNT(DISTINCT email)"];
      //console.log(count);

      const str=JSON.stringify(data);

      console.log(str)

      const sdata=JSON.parse(str);

      console.log(sdata);

      document.getElementById("msg").innerHTML = JSON.stringify(data);

    }).catch(err =>{
      console.log(err)
    })
    
  };



  const [data, setData] = useState({
    name: '',
    village: '',
    pincode: '',
    email: '',
    phno: '',
    gender: '',
    dob: ''
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    
    let response=fetch('http://localhost:8090/save',{
      method:'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'     
      },
      body:JSON.stringify(data)
  }).then(res=>{
  let savedetails=res.ok;
  console.log(savedetails);
  if(savedetails)  
      {
          console.log("sucess");
          document.getElementById("msg").innerHTML = "<h3>Updation Sucess</h3>";
      }
      else
      {
          console.log("failed..")
          document.getElementById("msg").innerHTML = "<h3>Updation Failed</h3>";

      }
      return res.json();
  }).then(data=>{
      console.log(data+" response data");

  }).catch(error=>{
      console.log("Error ",error);
  });

  };

  
  return (
    <div className="App">
      <header>
        <h1>Population Counting Form</h1>
        <div id="count">
          <input type="button" value="Get Count" onClick={getCount} />
        </div>
      </header>
      <div id="container">
        <div id="form">
          <form onSubmit={submitHandler}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" placeholder="Enter name" id="name" className="inp" required onChange={changeHandler} />
            <label htmlFor="village">Village:</label>
            <input type="text" name="village" id="village" placeholder="Enter village" className="inp" required onChange={changeHandler} />
            <label htmlFor="pincode">Pincode:</label>
            <input type="text" id="pincode" name="pincode" placeholder="Enter pincode" className="inp" required onChange={changeHandler} />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="Enter email" className="inp" required onChange={changeHandler} />
            <label htmlFor="phno">Phone No:</label>
            <input type="text" name="phno" id="phno" placeholder="Enter phone number" className="inp" onChange={changeHandler} />
            <div id="gen">
              <span>Gender:</span>
              <label htmlFor="m" className="labs">Male</label>
              <input type="radio" name="gender" id="m" value="Male" onChange={changeHandler} />
              <label htmlFor="f" className="labs">Female</label>
              <input type="radio" name="gender" id="f" value="Female" onChange={changeHandler} />
            </div>
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" name="dob" id="dob" className="inp" onChange={changeHandler} />
            <input type="submit" value="SUBMIT" id="submit" />
            
          </form>

          
          <div id="msg"></div>
        </div>
      </div>
      <footer>
        <span>population website @2024</span>
    </footer>
    </div>
  );
}

export default App;
 