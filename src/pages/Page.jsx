import Home from "./Home"
import { Route,Routes,BrowserRouter } from "react-router-dom"
import Cuisine from "./Cuisine";
import Searched from "./Searched";
function Page() {
  return (
  
   <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/cuisine/:type" element={<Cuisine/>} />
       <Route path="/searched/:search" element={<Searched/>} />
        

   </Routes>
   
  )
}

export default Page