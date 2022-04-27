import { useEffect, useState } from "react"
import styled from "styled-components"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Veggie() {
  const [veg,setVeg]=useState([])
  useEffect(()=>{
    console.log(process.env.key)
    veggies()

  },[])
  const veggies=async ()=>{

  const check=localStorage.getItem("veggies")
  if(check)
  {
    setVeg(JSON.parse(check))
  }
  else
  {
    const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=7d1d20bc7341492785fb3867ac706957&number=9&tags=vegetarian`)
    const data=await api.json()

    localStorage.setItem("veggies",JSON.stringify(data.recipes))
    setVeg(data.recipes)

    console.log(data)
  }
}

  return (
    <div>
       <Wrapper>
      <Splide options={{
            perPage:3
          }}> {
        
        veg.map(recipe=>{
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
    </div>
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



export default Veggie