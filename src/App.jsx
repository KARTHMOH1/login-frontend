import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './App.css'
function App() {
  const navigate = useNavigate()
  const [user,setuser]=useState("")
  const [pass,setpass]=useState("")

  function handleuser(evt){
    setuser(evt.target.value)
  }

  function handlepass(evt){
    setpass(evt.target.value)
  }

  function check(){
    var logindetails =axios.post("https://login-backend-l01i.onrender.com/login",{"username":user,"password":pass})
    logindetails.then(function(data){
        if(data.data === true){
          navigate("/success")
        }else{
          navigate("/fail")
        }
    })
  }


  return (
      <div>
        <h1>LOGIN FORM</h1>
        <input type="text" name="username" value={user} onChange={handleuser} placeholder="username"/>
        <input type="password" name="password" value={pass} onChange={handlepass} placeholder="password"/>
        <button onClick={check}>Login</button>
      </div>
  )
}

export default App
