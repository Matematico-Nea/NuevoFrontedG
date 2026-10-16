import reactLogo from '../assets/react.svg';

function Tarjeta({icono,titulo,descripcion,horas,destacada}) {
    console.log()
    return (
        <>
            <article className={destacada ? 'tarjeta trajeta-destacada' : 'tarjeta'}>
                <span className='tarjeta-icono'>{icono}</span>
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                <p className='tarjeta-horas'>⌛{horas} horas</p>
    
            </article>
        </>
        )


}

export default Tarjeta;
