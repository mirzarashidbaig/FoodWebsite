import Header from './Components/Header'
import MealCard from './Components/MealCard'
import InstDiv from './Components/InstDiv'
import './App.css'
import { useEffect, useState } from 'react'
function App() {
  
  const [url, Seturl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  const [ApiData,SetApidata] = useState("")
  const [show,setshow] = useState(true)
  const [Search, SetSearch] = useState("")
  const [shareId, SetshareId] = useState("");
  const[hide,Sethide] = useState(false);
  

  useEffect(()=>{
     fetch(url)
     .then((res)=>res.json())
     .then(data=>{
      SetApidata(data.meals);
      setshow(true)
     })
  },[url])



  const Recipy = (id) =>{
    
   Sethide(true)
   SetshareId(id)
    

  }

  const SeachHandle =()=>{
    
    Seturl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Search}`)
  }

  const closeb =()=>{
    Sethide(false)
  }
  return (
    <>
      <div className="container">
      <Header 
      
      SearchBtn = {SeachHandle}
      value={Search}
      onchange={(event)=>SetSearch(event.target.value)}
      />
        <section className='recipy_divs'>
          {
            show 
            ?
            <MealCard data = {ApiData} RecipyBtn = {Recipy}/>
            :
            <h1>Sorry</h1>
          }

          {
            hide ? <InstDiv sendData = {shareId} btnClose={closeb} /> :""

           
          }

        </section>
      </div>
    </>
  )
}

export default App
