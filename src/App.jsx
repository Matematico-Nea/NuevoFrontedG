import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import Encabezado from './components/Encabezado'
import  Tarjeta from './components/Tarjeta'
import PiePagina from './components/PiePagina'
import InterView from './components/myInterview'
import Sidebar from './components/sidebar'
import Reali from './images/Reali.jpg'
function App() {
  
  const programa = 'Analisi y desarrollo de software'
  const usuario = {
    nombre: 'GreynaHH',
    rol: 'Aprendiz',
    foto: Reali,


  }
  
  return (
    <>

      <Sidebar />

      
      <div className='principal'> 

        <Encabezado  usuario = {usuario} />

        

        <main className='contenido'>
          

          <InterView/>
          <h2> welcom to pollo hermanos {programa} </h2>
          <section className='tarjetas'>

            <Tarjeta 
            icono="⚛️"
            titulo="React"
            descripcion ="Clases de Ract activas"
            destacada={true}
            horas = {50}
            />
            <tarjeta 

              icono= "⚡"
              titulo = "vite"
              descripcion = " Estamos haciendo proyectos con estas soluciones"
              destacada = {false}
              horas = {45}
            />
            <Tarjeta 
            icono='🕵️'
            titulo ="Tenesmo que investigar"
            descripcion = "Cualquier descripcion"
            horas = {20}
            destacada={ true}

                    

            />
          <Tarjeta/>

          
          </section>
        </main>
        <PiePagina />
        
      </div>
    
    </>

   
  )
}

export default App
