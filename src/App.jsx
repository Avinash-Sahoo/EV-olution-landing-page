import { useEffect } from 'react'
import './App.css'
import Background from './Components/Background/Background'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import { useCar } from './context/Car'


function App() {
  const count = useCar();
  useEffect(()=>{

    const slide = setInterval(()=>{ 
    count.setHerono(count.Herono === 2 ? 0 : count.Herono+1)

    },3000)

      return function(){
        clearInterval(slide)
      }


  },[count.Herono,count.setHerono])

  return (
    <>
    <Background />
    <Header />
    <Hero />
    </>
  )
}

export default App
