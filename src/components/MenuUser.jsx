import Reali from '../images/Reali.jpg'

function MenuUsuario({usuario }){

    return (
        <div className='menu-usuario'>
            <button type='button' className='menu-usuario-botton'>
                <img src={usuario.foto} alt= {`foto de ${usuario.nombre}`} className='avatar'/>
                <span className='menu-usuario-datos'>
                    <span className='menu-usuario-nombre'>{usuario.nombre}</span>
                    <span className='menu-usuario-rol'>{usuario.rol}</span>
                </span>
                <span className='flecha'></span>
            </button>
            <ul className='Menu-despleglable'>
                <li><a href='#'>👤 My Perfil</a></li>
                <li><a href='#'> ⚙️Configuracion </a></li>
                <li className='Separador'></li>
                <li><a href='#' calssName='cerrar-sesion'> 🚪Cerrar Seccion</a></li>

            </ul>

        </div>

    )
}

export default MenuUsuario