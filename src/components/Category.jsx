import {FaHamburger,FaPizzaSlice} from 'react-icons/fa'
import {GiNoodles,GiChopsticks} from 'react-icons/gi'

import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import React from 'react'

function Category() {
  return (
    <List>
    
      
      
      <NavLink to={'/cuisine/italian'}>
          <GiNoodles/>
          <h4>Chinese</h4>
      </NavLink>

      <NavLink to={'/cuisine/american'}>
          <FaHamburger/>
          <h4>American</h4>
      </NavLink>

      <NavLink to={'/cuisine/mexican'}>
          <FaPizzaSlice/>
          <h4>Mexican</h4>
      </NavLink>

      <NavLink to={'/cuisine/japanese'}>
          <GiChopsticks/>
          <h4>Japanese</h4>
      </NavLink>
      </List>
     

    
  )
}

const List=styled.div`
  display: flex;
  color:black;
  text-align: center;
  justify-content: space-around;
  h4{
    color:#48044b
  }

`

export default Category
 