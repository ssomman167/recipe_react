import { useEffect, useState } from "react"
import styled from "styled-components"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
 

function Popular() {
  const [popula,setPopula]=useState([])
  useEffect(()=>{
    console.log(process.env.key)
    popular()

  },[])
  const popular=async ()=>{

  const check=localStorage.getItem("popular")
  if(check)
  {
    setPopula(JSON.parse(check))
  }
  else
  {
    const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=7d1d20bc7341492785fb3867ac706957&number=9`)
    const data=await api.json()

    localStorage.setItem("popular",JSON.stringify(data.recipes))
    setPopula(data.recipes)

    console.log(data)
  }

    

  }
  
  return (
    <>
   
   
   <Wrapper>
      <Splide options={{
            perPage:4
          }}> {
        
        popula.map(recipe=>{
          return(
          <SplideSlide >
          <Car key={recipe.id}>
          
            <img src={recipe.image} alt="" />
            <p>{recipe.title}</p>

          </Car>
          </SplideSlide>
            )
          }) }
      
        </Splide>
      
        </Wrapper>
 
    </>
  )
}

const Wrapper=styled.div`
  margin:2rem 0rem;
  /* display: flex;
  justify-content: center; */
`

const Car=styled.div`
  min-height: 25rem;
border-radius:3rem;
  overflow:hidden;
  text-align:center;
  margin-left:20px;
  
  img{
    border-radius:3rem;
    height: 200px;
    width:100%;
  }
  p{
    left:50%;
    color:black;
    font-weight:bold;
  }
`




export default Popular