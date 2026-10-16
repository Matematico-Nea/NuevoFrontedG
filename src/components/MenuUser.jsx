import Reali from '../images/Reali.jpg'

function MenuUsuario(){
    nombre = 'GReyan HH'
    rol = ' Aprendiz'
    skills = 'Improvisar'
    return (
        <div className='menu-usuario'>
            <button type='button' className='menu-usuario-botton'>
                <img src={Reali} alt= {`foto de ${Reali}`} className='avatar'/>
                <span className='menu-usuario-datos'>
                    <span className='menu-usuario-nombre'>{nombre}</span>
                    <span className='menu-usuario-rol'>{rol}</span>
                </span>
                <span className='flecha'></span>
            </button>
            <ul className='Menu-Depleglable'>
                <li><a href='#'>My Perfil</a></li>
                <li><a href='#'>Configuracion </a></li>
                <li className='Separador'></li>
                <li><a href='#' calssName='cerrar-sesion'>Cerrar Seccion</a></li>

            </ul>

        </div>

    )
}

export default MenuUsuario