import React from 'react'
import { Route , Switch} from "react-router-dom";
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import  Nav from "./components/Nav";
import  Error from "./components/Error";




export default function App() {
    return (
       <>
   <Nav />
   

      <Switch>
         < Route exact path= "/" component = {Home} />
         < Route path= "/Contact" component = {Contact} />
         < Route path= "/About" component = {About} />
         < Route  component = {Error} />

      </Switch>
       </>
    )
}
