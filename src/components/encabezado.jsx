import MenuUsuario from "./MenuUser";

function Encabezado({usuario}) {
    return (
        <header className="Encabezado">
            <div className="Encabezado-marca">
                <span className="Encabezado-logo">⚛️</span>
            <h1> first time one Encabezado</h1>
              
    
            </div>   
           <MenuUsuario usuario={usuario}/>
        </header>

        )
    }

export default Encabezado;