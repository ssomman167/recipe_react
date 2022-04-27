import styled from "styled-components"
import motion from "framer-motion"
import {Link,useParams} from 'react-router-dom'
import { useEffect, useState } from "react"

function Cuisine() {

    const params=useParams()
const [cuisine,setCuisine]=useState([])
useEffect(()=>{
getCuisine(params.type)
console.log(params)
},[params.type])

    const getCuisine=async (name)=>{
        const api=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7d1d20bc7341492785fb3867ac706957&cuisine=${name}`)
        const data=await api.json()
        console.log(data.results)
        setCuisine(data.results)
        
    }
  return (
    <Grid>
        {
            cuisine.map((e)=>{
                return(
                    <Card key={e.id}>
                        <img src={e.image} alt="" />
                        <p>{e.title}</p>
                    </Card>
                )
            })
        }
    </Grid>
  )
}
const Grid=styled.div`
    display: grid;
    grid-template-columns:repeat(3,1fr);
    margin-left:40px;
`

const Card=styled.div`
    img{
        height:15rem;

    }
    text-align: center;
`
export default Cuisine