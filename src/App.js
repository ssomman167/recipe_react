import React from 'react'
import Home from './pages/Home'
import Page from './pages/Page'
import Category from './components/Category'
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import Search from './components/Search'

function App() {
  return (
    <Main>
       <Search/>
       <BrowserRouter>
      
       <Category/>
       <Page/>
       
       </BrowserRouter>
    </Main>
   
  )
}
const Main=styled.div`
 /* background: linear-gradient(rgb(0, 0, 0),rgb(9, 18, 19)); */
 margin: 0;
 padding:0;
`

export default App