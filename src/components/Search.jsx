import styled from "styled-components"
import {FaSearch} from "react-icons/fa"
import { useState } from "react"
import {useNavigate} from "react-router-dom"

function Search() {
const [input,setInput]=useState("")
const navigate=useNavigate()


const submitHandler=(e)=>{
    e.preventDefault()
    navigate("/searched/"+input)

}
  return (

    <Ourform onSubmit={submitHandler}>
       
      
       <div>
       <FaSearch/>
       <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input}/>
       </div>
       
       
       {/* <button>Search</button> */}
    </Ourform>
  )
}

const Ourform=styled.form`
  margin-left:25rem;
  border:0;
  margin-bottom:3rem;
  input{
    
    border:none;
    padding: 1rem;
    border-radius:2rem;
    background-color: #ceb0b0;
    border:0;
    color: white;
    border: 1px solid #ceb0b0;
  }
  div{
    background-color: #ceb0b0;
    width: 45%;
    position: relative;
    padding: 0.5rem;
  }
 
  
`

export default Search