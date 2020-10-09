import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Section from "./Section"
import Appsection from "./Appsection"
import Cardsection from "./Cardsection"
const App=()=>{
  return (
     <div>
     <Navbar />
     <Section />
     <Appsection />
     <Cardsection />
      <Footer />
     </div>
  )
}

export default App;