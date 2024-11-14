

import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Cooktables from './Components/Cooktables/Cooktables'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'
function App() {
  const[cooks , setCooks] = useState([]);
  

  const handleWantToCook = (cook) =>{
    console.log(cook)
   const isExist = cooks.find(item => item.name == cook.name);
   if(!isExist){
    setCooks([...cooks,cook]);
   }
   else{
    alert("already exist")
   }
  }
  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <div className='max-w-6xl md:mx-auto text-center mt-4'>
      <h1 className='text-3xl font-lexend text-black'>Our Recipes</h1>
      <p className='font-lexend text-xl text-[#150B2B99]'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>


      <div className='flex space-x-10'>
      <Recipes handleWantToCook = {handleWantToCook}
      > </Recipes> 
      <Cooktables cooks = {cooks}
      ></Cooktables>
      </div>
    </div>
    </>
  )
}

export default App

