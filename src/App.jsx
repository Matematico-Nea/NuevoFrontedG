import { useState } from 'react'
import heroImg from './assets/hero.png'
import viteLogo from './assets/vite.svg'
import viteLogo from './assets/react.svg'
import './App.css'
import Encabezado from './components/encabezado'
import  Tarjeta from './components/Tarjeta'
import PiePagina from './components/PiePagina'
import InterView from './components/myInterview'
import Sidebar from './components/sidebar'

function App() {
  
  const programa = 'Analisi y desarrollo de software'
  return (
    <>
    
      
      <div className='Layaout'>        
        <Encabezado />
        <Sidebar />
      </div>

      <main className='contenido'>

        <InterView/>
        <h2> welcom to pollo hermanos {programa} </h2>
        <section>
        <Tarjeta icono="⚛️"
                  titulo="React"
                  descripcion ="Clases de Ract activas"
                  desta
        />
        <tarjeta icono= "⚡"
                titulo = "vite"
                descripcion = " Estamos haciendo proyectos con estas soluciones"

        />
        <Tarjeta icono='🕵️'
                titulo ="Tenesmo que investigar"
                descripcion = "Cualquier descripcion"
                 

        />
        <Tarjeta/>
        <PiePagina/>
        </section>
      </main>
      
    
    </>

   
  )
}

export default App
